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
    createComment = (comment) => {
        console.log("creating comment")
        this.props.createComment(comment, this.props.match.params.id)
    }
    setColor = (riskPercentage) =>{
        if(riskPercentage <= 25 ){
            return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP0AAADHCAMAAADlCqUFAAAAaVBMVEX///9zvx9iuABougBquwBxvhjF46v5/PRvvRPt9uP3+/FtvQuu2Ii225Xe787+//2CxEF+wziVzGO63Zt1vyTn9Nub0Gp6wS/i8dXL5bSq1oLB4aWl1HuCxEK125Px+OrU6sCKx0+Ry1o6tgqpAAABi0lEQVR4nO3YYW7aQBAG0Hhtg8EkhZBASZrQcP9DFqSKCoIt9cd6JPPeCb7R7Mza+/AAAAAAAAAAAAAAAAAAAAAAAAAAAAD8h6fHzcdqeXjb7aOTDG6+aFLV1HXdVGU6PEXHGda6qop/mnSYRScazvyrLC617e/oUEPZF23xTZpExxrG9KX5Xvyx/F10sEEcbnT+pLyH2Z+k28UXzVd0tPymRd1RfVGO/+y/V13FF/U2Olx2q87WH5v/MzpdZrOuqT9pP6PjZTbpPvjHoz/2vffZcd39bX50vMw2N790zoM/jc6X13Nv9WkenS+v++79onfuq+h4mfXv/GV0vMz67/tFdLzcXvq+9Ub/wvXYd/Sjw2U371575R0876yv3/TOO2/1IzrbAJYdV34a/dSf7Mubiy+to4MNY3ar/DT2v9uz2fZ68dfle3So4UzfUnNR+2rsrzqXXjepbE8DUDdV2o7/OfPafPfro27b7fP6NTpKlHu44QEAAAAAAAAAAAAAAAAAAAAAAAAAyOAPRjQKgv1XsPIAAAAASUVORK5CYII='
        }
        if(riskPercentage >= 75){
            return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAToAAACgCAMAAACrFlD/AAAAM1BMVEX////7AAD/7e3/+/v+l5b/6ej+4+P/8fH8NjX8Kin9nJv+v77+uLj+wcH//Pz9oaH8QD/DdBtIAAAAuElEQVR4nO3Yyw6CQAwFUAZQFHzw/1+rK6PogtRF0+ScL7i5STOddh0AAAAAAAAAAAAAAAAAAAAAAAAAAAD8MvX9lJ2homFe29N6v2UnqWZpL9fsLLWM7c2cnaaSS/uwZOepY2gbQ3aiMsZtdUZ2r/O2ulN2oir6bXOt2e/2OX5Xd8jOVITqwgxsnGcizHISZiWO8xGL8/2Pc3SKc+r8hwM7AAAAAAAAAAAAAAAAAAAAAAAAAAAAXx6kQwKdFVtKMQAAAABJRU5ErkJggg=='
        }
        if ((riskPercentage<75) && (riskPercentage>25))
        return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQsAAAC9CAMAAACTb6i8AAAAbFBMVEX//////wD///z//+z///j//3f//1n//+X//8b//2H//8L//+7//xj//+r//3v//4P//6v//2n//4j//6f//7z///X//zv//zH//+L///L//7T//5L//9H//1P//8z//5f//3H//6D//0b//9d7U+MSAAACfElEQVR4nO3cCZKiQBCFYQoRkEERQW2Xtnva+99xJHoM1HCBqtKMSP/vBMkLqI2EIAAAAAAAAAAAAAAAAAAAAAAA4Jokq2ZlXM6qNJEuRVAY7YvcnMpn+yiULkvAIP0+D+J/HJPdQLq0FxuniytB/PpJx9LlvdAgK28m0SizP9Ilvsp2eO3pOH9S9tJFvkS4/nmQROOzfoNBNNwsO0RhzHIjXenTRaNOSTRGyu+MwaOR4uzWUD2CrvpEcQgjki74eeafvaI4PCZqw4iKnlEYM1MaRlj1e0Ia+VTnALq7vey+bbGTLvsZBkOLKIyZaJxMaqsojMmkC/cviS2zGOnbw2eWURiTSpfu27j/HHKUaxsxKusojKmki/fMdrRoxNLF+zV3iMIY6er9sp1Qf22ly/eq+6nFNUPp8r1yisLk0uX7lLhlYTS9Uksds9C03Jo6ZjGVvgCPNo5ZfElfgEd22/VWIX0BHrlNqcaU0hfgUd8z30uaVuHcFy3GixbzSIv1Rct13alpo+q6H1HVtOQWhap9anC/P+sRXecXnGu1OO88wTl4a+2QRS1dvGe8N2uF9jeGttvisNyy3bfH+t6zW48YCvsvgsRuvfWtav19VHdrfj631PQ6oBV9WfTx/VXa1Djvf7xVKI0iCFZ955J4Ll3y8/TtB19JF/xMvQ511C04L8y7b9Jine3PJ6Ki23OynKmP4hBG1aUvfKG0Kf5CmD5egZbpW0RxkKzvjxqjWlMjziNJfee75UzlFuSO8e7qF7v58O2+Z2+E0XZyEUTxnv85OPo4/v8i+5AuBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC1f88dGnWuvQuyAAAAAElFTkSuQmCC'
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
console.log("COMMENTS" ,myTicket.comments)

if(myTicket.comments.length > 3){
    console.log("comments greater than 3")
    riskPercentage = riskPercentage + 5
}


//risk percentage using the average of all ticket price


const TicketPricesForEvent = allTicketForEvent.map(ticket => ticket.price)
const averagePrice = TicketPricesForEvent.reduce((accumulator,current) => accumulator + current)/TicketPricesForEvent.length

console.log(myTicket.price)
let  percentageDiffrence = (((averagePrice - myTicket.price)/averagePrice)*100)
console.log("avearage",percentageDiffrence)
console.log("ticket prices",TicketPricesForEvent)
console.log("RISK",riskPercentage)

if(myTicket.price < averagePrice){
    riskPercentage = riskPercentage + percentageDiffrence
}else{
    percentageDiffrence = percentageDiffrence * -1
    if(percentageDiffrence > 10){
        riskPercentage = riskPercentage -10 // deduct maximum 10
    }else{
        riskPercentage = riskPercentage - percentageDiffrence
    }

}
//minimum risk percentage is 5% and maximum is 95%

if(riskPercentage < 5){
    riskPercentage = 5 
}
if(riskPercentage > 95){
    riskPercentage = 95 
}
console.log("RISK",riskPercentage)

        return (
           
            <div>
                <h2>Ticket Details:</h2>
                
                <img src={ticket.ticketPictureUrl} alt=""/>
                <img src={this.setColor(riskPercentage)}/>
                {<p>Risk percentage for the ticket: {riskPercentage}%</p>}

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
