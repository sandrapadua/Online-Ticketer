import {USER_LOGIN_FAILED} from '../actions/users'

export default function (state = {}, action) {
	switch (action.type) {
        case USER_LOGIN_FAILED:
        console.log("login failed from reducer")
			return {
				error: action.payload
			}

		default: return state
	}
}