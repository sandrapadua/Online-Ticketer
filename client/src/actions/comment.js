import * as request from 'superagent'
import { baseUrl } from '../constants'

import { logout } from './users'
import { isExpired } from '../jwt'


export const ADD_COMMENT = 'ADD_COMMENT'

const addComment = (comment) => ({
  type: ADD_COMMENT,
  payload: comment
})
export const createComment = (comment, ticketId) => (dispatch, getState) => {
  console.log("creating comment action",comment,ticketId)
  const state = getState()
  const jwt = state.currentUser.jwt
console.log('current user ',jwt)
  // request
  //     .post(`${baseUrl}/comments/${ticketId}`)
  //     .set('Authorization', `Bearer ${jwt}`)
  //     .send(comment)
  //     .then(response => dispatch({
  //       type: ADD_COMMENT,
  //       payload: response.body
  //     }))
  // }
  
  if (isExpired(jwt)) return dispatch(logout())
  request
  .post(`${baseUrl}/comments/${ticketId}`)
  .set('Authorization', `Bearer ${jwt}`)
  .send(comment)
  .then(result => dispatch(addComment(result.body)))
  .catch(err => console.error(err))


}
