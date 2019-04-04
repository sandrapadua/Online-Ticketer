import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import {fetchTicket} from '../../actions/ticket';
import {Link} from 'react-router-dom';
import {createComment} from '../../actions/comment';
import CommentForm from '../comments/CommentForm';

class TicketDetails extends PureComponent {
    componentDidMount() {
        console.log("fetching details")
        this.props.fetchTicket(this.props.match.params.id);
    }

    render() {
        const { ticket } = this.props;
        
        if (!ticket) return null

        console.log("TICKET IN TICKET DETAILS" ,ticket)
        console.log("TICKET" ,ticket.id)

        // fraud risk calculation

        let riskPercentage = 5;

        let myTicket = ticket
        console.log("MY TICKET" ,myTicket)
        const TotalTicketOfUser = myTicket.user.tickets.length
        console.log("TOTAL  TICKET" ,TotalTicketOfUser)

        const allTicketForEvent = myTicket.event.tickets
        console.log('allTicketForEvent',allTicketForEvent)

        //if user created only one ticket
        if(TotalTicketOfUser === 1 ){
            riskPercentage = riskPercentage + 10;
        }
        // if ticket is created between the business hours or not 

        console.log("TIME" ,myTicket.created.split('T')[1])
        const ticketDate = new Date(myTicket.created)
        console.log("DATE",ticketDate.getHours())

        const hours = ticketDate.getHours()
        const minutes = ticketDate.getMinutes()
        const seconds = ticketDate.getSeconds()
        const postedtime = `${hours}:${minutes}:${seconds}`
        // const postedtime = '18:00:00'
        console.log("posted time",postedtime)
        if (postedtime > "09:00:00" && postedtime < "17:00:00"){
            console.log("business time")
            riskPercentage = riskPercentage - 10
        }else{
            riskPercentage = riskPercentage + 10
            console.log("not business time")

        }
        console.log("RISK",riskPercentage)

       // comments check comments >3







        return (
           
            <div>
                <h2>Ticket Details:</h2>
                
                <img src={ticket.ticketPictureUrl} alt=""/>
                {<p>Description: {ticket.description}</p>}
                {<p>Price: {ticket.price}</p>}
                {<p>Seller: {ticket.user.firstName}</p>}
                {<p>Created at: {ticket.created}</p>}
                <br/>

                <h1>Comments:</h1>
                { ticket.comments.map(comment => (<div key={comment.id}>
                <h4>{comment.content}</h4>
                <p>By {comment.author}</p>
                </div> ))}

                <br/>

                { this.props.currentUser && <h2>Create a comment to this ticket</h2> }

                { this.props.currentUser && <CommentForm ticketId={this.props.match.params.id} onSubmit={this.createComment} /> }
                { !this.props.currentUser && <h2>To create a comment, please <Link to="/login">login</Link></h2> }
                                </div>)
                }
                }
const mapStateToProps = function (state, props) {
    console.log("MAP STATE TO PROPS",state.ticket)
    return {
        ticket: state.ticket,
        tickets: state.tickets,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, {fetchTicket,createComment})(TicketDetails)