import { LOAD_EVENTS, LOAD_EVENT_DETAILS, ADD_EVENT } from '../actions/events'

const initialState = { allEvents: [], selectedEvent: null }

const reducer = (state = initialState, action = {}) => {

    switch (action.type) {

        case LOAD_EVENTS:
        
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

        default:
        return state
}
}

export default reducer