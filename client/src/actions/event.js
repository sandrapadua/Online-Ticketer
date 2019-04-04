import * as request from 'superagent'

const baseUrl = 'http://localhost:4000'
export const FETCHED_DETAILED_EVENT = 'FETCHED_DETAILED_EVENT'


export const fetchEvent = (eventId) => (dispatch) => {
    request
      .get(`${baseUrl}/events/${eventId}`)
      .then(response => dispatch({
        type: FETCHED_DETAILED_EVENT,
        payload: response.body
      }))
      .catch(err => alert(err))
  }