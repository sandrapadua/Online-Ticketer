import ADD_TICKET from '../actions/ticket'

export default function (state = [], action) {
    switch (action.type) {
        case ADD_TICKET:

        console.log('add ticket at reducer')

        return [...state, action.payload]

        default:
        return state
    }
}