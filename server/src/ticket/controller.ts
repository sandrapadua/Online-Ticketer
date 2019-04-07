import { JsonController, Get, Param, Body, NotFoundError, Put, Post, HttpCode,Authorized } from 'routing-controllers'
import Ticket from './entity'


@JsonController()
export default class TicketController {

    @Get('/tickets')
    async allTickets() {
        const tickets = await Ticket.find({relations:["user"]})
        return { tickets }
    } 
    @Get('/tickets/:id')
    getTicket(
        @Param('id') id: number
    ) {
        return Ticket.findOne(id, {relations:["user", "event"]})
    } 
    @Get('/tickets/byuser/:userId')
    getTicketByUser(
        @Param('userId') userId:number
    ) {
        const conditions = {where: {user: userId}}
        return Ticket.findAndCount(conditions)
    }

    @Authorized()
    @Post('/tickets/:id/:userId')
    @HttpCode(201)
    createTicket(
        @Body() ticket: Ticket,
        @Param('id') id: number,
        @Param('userId') userId: number
    ) {
        ticket.event = Number(id);
        ticket.user = Number(userId);
        return ticket.save()
    }
    @Put('/tickets/:id')
     async updateTicket(
         @Param('id') id: number,
         @Body() update: Partial<Ticket>
     ) {
         console.log("8*********************details of ticket******************8")
         const ticket = await Ticket.findOne(id)
         if (!ticket) throw new NotFoundError('Cannot find this ticket')

         return Ticket.merge(ticket, update).save()
     }
    }