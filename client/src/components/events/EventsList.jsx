import React from 'react'
import { Link } from 'react-router-dom'

export default function eventsList(props) {
	return (
		<div>
			<div>
				<h3>Current events</h3>
				{props.user && <Link to={"/create-event"}><button>Create new event</button></Link>}
			</div>
			<div className='events-wrapper'>
				{props.events && props.events.map(event => (
					<Link to={`/events/${event.id}`} style={{textDecoration: "none"}} key={event.id}>
						<div className='events-border'>
							<img src={event.picture} alt='Click for more details'/>
							<h4>{event.name}</h4>
						</div>
					</Link>
				))}
				{!props.events && <li>Loading events...</li>}
			</div>
		</div>
	)
}