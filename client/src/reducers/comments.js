import {ADD_COMMENT} from '../actions/comment'
export default function (state = [], action) {

    switch (action.type) {
        case ADD_COMMENT:
        console.log("adding comments in reducer")
        return [...state, action.payload]

        default:
        return state
    }


}