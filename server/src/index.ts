import 'reflect-metadata'
import setupDb from './db'
import {createKoaServer,Action,BadRequestError} from 'routing-controllers'
import EventController from './events/controller'
import TicketController from './ticket/controller'
import CommentController from './comment/controller'
import UserController from './user/controller';
import LoginController from './logins/controller';
import { verify } from './jwt';
import User from './user/entity'

const port = process.env.PORT || 4000

const app = createKoaServer({
  cors: true,
    controllers: [
      EventController,
      TicketController, 
      CommentController, 
      UserController,
      LoginController
    ],
    authorizationChecker: (action: Action) => {
      console.log('*****************authorisation checker***************')
      const header: string = action.request.headers.authorization
    console.log("*************HEADER************",header)
      if (header && header.startsWith('Bearer ')) {
        const [ , token ] = header.split(' ')
        try {
          console.log("auth true******************")
          return !!(token && verify(token))
        }
        catch (e) {
          console.log("errorrrr*************8")
          throw new BadRequestError(e)
        }
      }
      return false
    },
    currentUserChecker: async (action: Action) => {
      const header: string = action.request.headers.authorization
      if (header && header.startsWith('Bearer ')) {
        const [ , token ] = header.split(' ')
        
        if (token) {
          const {id} = verify(token)
          return User.findOne(id)
        }
      }
      return undefined
    }
  })


setupDb()
  .then(_ =>
    app.listen(port, () => console.log(`Listening on port ${port}`))
  )
  .catch(err => console.error(err))

