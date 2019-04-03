import React, { PureComponent } from 'react'
import { userId } from '../../jwt'
import { getUsers } from '../../actions/users'
import { connect } from 'react-redux'
import EventDetails from './EventDetails'
import { getEvents, getEventDetails } from '../../actions/events'

class EventDetailsContainer extends PureComponent {

    componentWillMount() {
        if (this.props.authenticated) {
            if (this.props.users === null) this.props.getUsers()
        }
        if (this.props.events.allEvents.length === 0) this.props.getEvents()
    }

    componentDidMount() {
        this.props.getEventDetails(Number(this.props.match.params.id))
    }

    render() {
        return (
            <EventDetails
                event={this.props.events.selectedEvent}
                user={this.props.authenticated}
                events={this.props.events.allEvents}
            />
        )
    }
}

const mapStateToProps = function (state) {
    return {
        events: state.events,
        authenticated: state.currentUser !== null,
        userId: state.currentUser && userId(state.currentUser.jwt),
        users: state.users,
    }
}

const mapDispatchToProps = {
    getUsers,
    getEvents,
    getEventDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailsContainer)