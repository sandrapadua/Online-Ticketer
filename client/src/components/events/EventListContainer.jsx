import React, { PureComponent } from 'react'
import {fetchAllEvents, createEvent} from '../../actions/events'
import EventForm from './EventForm'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class EventsListContainer extends PureComponent {
   
    componentWillMount() {
        this.props.fetchAllEvents();
    }
    createEvent = (event) => {
        console.log("call from components to action FOR CREATING AN EVENT",event)
        this.props.createEvent(event)
    }

    render() {
        
        const { events } = this.props;
        const allEvents = events.allEvents
        console.log("ALL EVENTS",events)
        console.log("ALL EVENTS check",allEvents)
        return (
           
            <div>
            <h1>All events</h1>
                <ul className="event-list">
                    { allEvents.map(event => (
                            <Link className="event" key={event.id} to={`/events/${event.id}`}>
                                <li className="event-item">
                                    <h2 className="event-title">{event.name}</h2>
                                    <img src={event.pictureUrl} alt=""/> 
                                </li>
                            </Link>
                    ))}
                </ul>

                <br/>
                
{console.log("CURRENT USER",this.props.currentUser)}
{ this.props.currentUser && <h2>Create a new event</h2> }
{ this.props.currentUser && <p>-- Please, fill in all fields --</p> }

{ this.props.currentUser && <EventForm onSubmit={this.createEvent} /> } 
{ !this.props.currentUser && <h2>To create a new event, please <Link to="/login">login</Link></h2 >}
                </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        events: state.events,
        currentUser: state.currentUser 
    }
}

const mapDispatchToProps = {
    fetchAllEvents,
    createEvent
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsListContainer)