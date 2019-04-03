import * as request from 'superagent'

export const ADD_TICKET = 'ADD_TICKET'

const baseUrl = 'http://localhost:4000'

export const createTicket = (ticket, eventId, user) => (dispatch, getState) => {
    const state = getState()
    const jwt = state.currentUser.jwt
  
    request
      .post(`${baseUrl}/tickets/${eventId}/${user}`)
      .set('Authorization', `Bearer ${jwt}`)
      .send(ticket)
      .then(response => dispatch({
        type: ADD_TICKET,
        payload: response.body
      }))
  }