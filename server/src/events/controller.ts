import { JsonController,Authorized, Get,Param,Post, HttpCode, Body,} from 'routing-controllers'
// type PageList = { pages: Page[] }
import Event from './entity'
// import { validate } from 'class-validator'

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
        return event.save()
    } //post not working
}