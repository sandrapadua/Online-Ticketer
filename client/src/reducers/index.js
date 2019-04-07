import {combineReducers} from 'redux'
import events from'./events'
import event from './event'
import ticket from './ticket'
import currentUser from './currentUser'
import login from './login'
import signUp from './signup'
export default combineReducers({
    events,event,ticket,currentUser,login,signUp})