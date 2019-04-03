import * as request from 'superagent'
import {baseUrl} from '../constants'
import {isExpired} from '../jwt'

export const UPDATE_USERS = 'UPDATE_USERS'
export const USER_LOGOUT = 'USER_LOGOUT'


const updateUsers = (users) => ({
    type: UPDATE_USERS,
    payload: users
  })


  export const logout = () => ({
    type: USER_LOGOUT
  })
  

export const getUsers = () => (dispatch, getState) => {
    const state = getState()
    if (!state.currentUser) return null
    const jwt = state.currentUser.jwt
  
    if (isExpired(jwt)) return dispatch(logout())
  
    request
      .get(`${baseUrl}/users`)
      .set('Authorization', `Bearer ${jwt}`)
      .then(result => dispatch(updateUsers(result.body)))
      .catch(err => console.error(err))
  }