import * as request from 'superagent'
import { baseUrl } from '../constants'
import {logout} from './users'
import {isExpired} from '../jwt'

export const LOAD_EVENTS = 'LOAD_EVENTS'


const loadEvents = (events) => ({
  type: LOAD_EVENTS,
  payload: events.events
})

export const getEvents = () => (dispatch) => {
  console.log("get all events in action")
  request
    .get(`${baseUrl}/events`)
    .then(result => dispatch(loadEvents(result.body)))
    .catch(err => console.error(err))
}