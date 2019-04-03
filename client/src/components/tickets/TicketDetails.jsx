import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import {fetchTicket} from '../../actions/ticket';
import {Link} from 'react-router-dom';

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
        return (
           
            <div>
                <h2>Ticket Details:</h2>
                
                <img src={ticket.ticketPictureUrl} alt=""/>
                {<p>Description: {ticket.description}</p>}
                {<p>Price: {ticket.price}</p>}
                {<p>Seller: {ticket.user.firstName}</p>}
                {<p>Created at: {ticket.created}</p>}
                </div>)
}
}
const mapStateToProps = function (state, props) {
    console.log("MAP STATE TO PROPS",state.ticket)
    return {
        ticket: state.ticket,
        // tickets: state.tickets,
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, {fetchTicket})(TicketDetails)