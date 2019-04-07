import * as request from 'superagent'
import { baseUrl } from '../constants'
import {logout} from './users'
import {isExpired} from '../jwt'

export const FETCHED_ALL_EVENTS = 'FETCHED_ALL_EVENTS'
export const ADD_EVENT = 'ADD_EVENT'


const loadEvents = (events) => ({
  type: FETCHED_ALL_EVENTS,
  payload: events.events
})



export const fetchAllEvents = () => (dispatch) => {
  console.log("get all events in action")
  request
    .get(`${baseUrl}/events`)
    .then(result => console.log(dispatch(loadEvents(result.body))))
    .catch(err => console.error(err))
}



export const createEvent = (event) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
  console.log("STATE",state)
  console.log("JWT",jwt)


  if (isExpired(jwt)) return dispatch(logout())

console.log("CREATE EVENT",event)
  request
    .post(`${baseUrl}/events`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(event)
    .then(response => dispatch({
      type: ADD_EVENT,
      payload: response.body
    }))
}