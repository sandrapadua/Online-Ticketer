import {
	USER_SIGNUP_SUCCESS, USER_SIGNUP_FAILED
} from '../actions/users'

export default function (state = {}, {type, payload}) {
	switch(type) {
    case USER_SIGNUP_SUCCESS:
    console.log("signup sucess", payload)
      return {
        success: true
      }

    case USER_SIGNUP_FAILED:
      return {
        error: payload
      }

		default:
      return state
    }

}
