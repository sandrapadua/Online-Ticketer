import { FETCHED_ALL_EVENTS, LOAD_EVENT_DETAILS, ADD_EVENT } from '../actions/events'
import {ADD_TICKET} from '../actions/ticket'

const initialState = { allEvents: [], selectedEvent: null }

const reducer = (state = initialState, action = {}) => {

    switch (action.type) {

        case FETCHED_ALL_EVENTS:
        
            // events which are older than current will not show
            const formatDate = (n) => {
                return n < 10 ? '0' + n : n;
            }
            const currentDate = new Date()
            const year = currentDate.getFullYear()
            const month = currentDate.getMonth()
            const date = currentDate.getDate()
            const fullDate = `${year}-${formatDate(month + 1)}-${formatDate(date)}`
            return {
                ...state,
                allEvents: action.payload.filter(event => event.endDate >= fullDate)
            }

            case ADD_EVENT:
            return [...state, action.payload]

            case ADD_TICKET:
                const currentEvent = state.filter(event => event.Id === action.payload.event)[0];
                currentEvent.tickets = [
                ...currentEvent.tickets || [], { ...action.payload, comments: [] }
                ];

    return [...state, currentEvent];

        default:
        return state
}
}

export default reducer