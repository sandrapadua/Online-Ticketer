import { JsonController,    Get,  Authorized } from 'routing-controllers'
import Ticket from './entity';
// import { io } from '../index'

@JsonController()
export default class TicketController {
    @Authorized()
    @Get('/events')
    allUsers() {
      return Ticket.find()
    }
}