import React from 'react'
import { Link } from 'react-router-dom'

export default function evenDetails(props) {
    if (props.event === null) return 'Loading...'
    return (
        <div>
          <Link to="/events">
            <button>Events List</button>
          </Link>
          {props.user &&
            <Link to={`/events/${props.event.id}/create-ticket`}>
              <button>Add your ticket</button>
            </Link>
          }
          <div>
            <h2>Event: {props.event.name}</h2>
            <p>There are total {(props.event.tickets.length)} ticket(s) for this event</p>
          </div>
          <div className="tickets-wrapper">
            <h5>Seller</h5>
            <h5>Price</h5>
            <h5>Description</h5>
          </div>
          {props.event.tickets.map(ticket =>
            <Link to={`${props.event.id}/tickets/${ticket.id}`} key={ticket.id} style={{ textDecoration: "none"}}>
              <div className="tickets-wrapper">
                <div>{ticket.user.email}</div>
                <div>{ticket.price}</div>
                <div>{ticket.description}</div>
              </div>
            </Link>
          )}
    
        </div>
      )
    }