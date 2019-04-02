import { JsonController,    Get,  Authorized } from 'routing-controllers'
import Event from './entity';
// import { io } from '../index'

@JsonController()
export default class EventController {
    @Authorized()
    @Get('/events')
    allUsers() {
      return Event.find()
    }
}