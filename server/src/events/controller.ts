import { JsonController,  Get} from 'routing-controllers'
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
}