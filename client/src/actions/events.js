import * as request from 'superagent'
import { baseUrl } from '../constants'
import {logout} from './users'
import {isExpired} from '../jwt'

export const LOAD_EVENTS = 'LOAD_EVENTS'
export const LOAD_EVENT_DETAILS = 'LOAD_EVENT_DETAILS'


const loadEvents = (events) => ({
  type: LOAD_EVENTS,
  payload: events.events
})

const loadEventDetails = (event) => ({

  type: LOAD_EVENT_DETAILS,
  payload: event
})

export const getEvents = () => (dispatch) => {
  console.log("get all events in action")
  request
    .get(`${baseUrl}/events`)
    .then(result => dispatch(loadEvents(result.body)))
    .catch(err => console.error(err))
}
export const getEventDetails = (eventId) => (dispatch,getState) => {
  console.log("get event details in action")
  request
    .get(`${baseUrl}/events/${eventId}`)
    .then(response =>{
      console.log("Fetched",response.body)
       dispatch(loadEventDetails(response.body))})
    .catch(err => console.error(err))
}