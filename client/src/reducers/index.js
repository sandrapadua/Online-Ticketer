import {combineReducers} from 'redux'
import events from'./events'
import event from './event'
import ticket from './ticket'
export default combineReducers({
    events,event,ticket})