import { JsonController,Authorized,CurrentUser, Get,Param,Post, HttpCode, Body,} from 'routing-controllers'
import Event from './entity'
  @JsonController()
  export default class EventController {
  
    @Get('/events')
    async getAllEvents() {
      console.log("*************get all events listed***********************")
      const events = await Event.find()
      return { events }
    }

    @Get('/events/:id')
    getEvent(
        @Param('id') id: number
    ) {
        return Event.findOne(id)
    }

    @Authorized()
    @Post('/events')
    @HttpCode(201)
    createEvent(
        
        @Body() event: Event
    ) {
        console.log('*******************CREATE EVENT ****************')
        return event.save()
    } //post not working
}