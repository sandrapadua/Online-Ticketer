import { JsonController, Post, Body, BadRequestError} from 'routing-controllers'
import { IsString} from 'class-validator'
import User from '../user/entity'
import {sign} from '../jwt'

class AuthenticatePayload {
  @IsString()
  email: string
  
  @IsString()
  password: string
  }
  
  
@JsonController()
export default class LoginController {

  @Post('/logins')
  async authenticate(
    @Body() { email, password }: AuthenticatePayload
  ) {
    console.log("*********************LOGIN********************************",email,password)
      const user = await User.findOne({ where: { email } })
      console.log("USER***********",user)
      if (!user || !user.id){
        console.log("*******Does not exist")
        throw new BadRequestError('A user with this email does not exist')
      } 



      if (!await user.checkPassword(password)) {
        console.log("********************InCORRECT")
        // throw new BadRequestError('The password is not correct')   
         }
      else{
        console.log("********************CORRECT")
      }
        // 
      console.log("************************password correct")
      const jwt = sign({ id: user.id })
      console.log("***************",jwt, user.id)
      return { 'jwt':jwt, 'id':user.id }
    }
}