import * as request from 'superagent'
import {isExpired} from '../jwt'

const baseUrl = 'http://localhost:4000'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'
export const UPDATE_USERS = 'UPDATE_USERS'
export const USER_LOGOUT = 'USER_LOGOUT'



const userSignupSuccess = () => ({
	type: USER_SIGNUP_SUCCESS
  })

	export const logout = () => ({
		type: USER_LOGOUT
	})

	const updateUsers = (users) => ({
		type: UPDATE_USERS,
		payload: users
	})

  const userSignupFailed = (error) => ({
	type: USER_SIGNUP_FAILED,
	payload: error || 'Unknown error'
  })
  
export const login = (email, password) => (dispatch) => {
    console.log("at action of login")
	request
		.post(`${baseUrl}/logins`)
		.send({ email, password })
		.then(result => {
		dispatch({
				type: USER_LOGIN_SUCCESS,
				payload: result.body
			})
		})
		.catch(err => {
			if (err.status === 400) {
				console.log("login failed in action")
				dispatch({
					type: USER_LOGIN_FAILED,
					payload: err.response.body.message || 'Unknown error'
				})
			}
			else {
				console.error(err)
			}
		})
}

export const signup = (email, password) => (dispatch) =>{
    console.log("at action of signup",email,password)

	request
		.post(`${baseUrl}/users`)
		.send({ firstName: email, lastName: email, email, password })
		.then(result => {console.log("sign up sucess full fetched result",
			dispatch(userSignupSuccess()))
		})
		.catch(err => {
			if (err.status === 400) {
				dispatch(userSignupFailed(err.response.body.message))
			}
			else {
				console.error(err)
			}
		})
	}

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
