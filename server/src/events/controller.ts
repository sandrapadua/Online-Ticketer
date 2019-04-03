import { JsonController, NotFoundError, HttpCode,Get,Post, Param,Put,Body } from 'routing-controllers'
// type PageList = { pages: Page[] }
import Event from './entity'
// import { validate } from 'class-validator'

@JsonController()
export default class PageController {

    // @Get('/events/:id')
    // getPage(
    //     @Param('id') id: number
    // ) {
    //     return Event.findOne(id)
    // }

    @Get('/eventslist')
   async allevents(){
        console.log("****************Events into LIst********")
        const eventsList = await Event.find()
        return {
            eventsList
        }
   }
   @Get('/events/:id')
  getEvent(
      @Param('id') id: number) {
      console.log('entered*******************')
    return Event.findOne(id);
  }
//   @Get('/eventslist')
//   getAd(@Param('category') category: string) {
//     return Event.findOne(id);
//   }

    // @Get('/users/:id')
    // getUser(@Param('id') id: number) {
    //   return User.findOne(id);
    // }

    @Put('/events/:id')
    async updateAdvertisement(
    @Param('id') id: number,
    @Body() update: Partial<Event>
    ){ 
        const advertisement =await Event.findOne(id)
        if (!advertisement) throw new NotFoundError('Cannot find page')
        return Event.merge(advertisement, update).save() }

    @Post('/pages')
    @HttpCode(201)
    async createPage(
    @Body() advertisement: Event) {
        
            return advertisement.save()
        
    

       
    }
}