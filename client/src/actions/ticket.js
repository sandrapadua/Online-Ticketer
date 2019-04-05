import * as request from 'superagent'

export const ADD_TICKET = 'ADD_TICKET'
export const FETCHED_DETAILED_TICKET = 'FETCHED_DETAILED_TICKET'

const baseUrl = 'http://localhost:4000'

export const createTicket = (ticket, eventId, user) => (dispatch, getState) => {
    const state = getState()
    const jwt = state.currentUser.jwt
  console.log("creating ticket action")
    request
      .post(`${baseUrl}/tickets/${eventId}/${user}`)
      .set('Authorization', `Bearer ${jwt}`)
      .send(ticket)
      .then(response => dispatch({
        type: ADD_TICKET,
        payload: response.body
      }))
  }

  export const fetchTicket = (ticketId) => (dispatch) => {
    console.log("fetched details of ticket",ticketId)
    request
      .get(`${baseUrl}/tickets/${ticketId}`)
      .then(response => console.log(dispatch({
        type: FETCHED_DETAILED_TICKET,
        payload: response.body
      })))
      .catch(err => alert(err))
  }