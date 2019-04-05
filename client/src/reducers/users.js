import {USER_LOGOUT,UPDATE_USERS} from '../actions/users'

export default (state = null, {type, payload}) => {
    switch (type) {
      case USER_LOGOUT:
        return null
        
        case UPDATE_USERS:
        return payload.reduce((users, user) => {
          users[user.id] = user
          return users
        }, {})
  
      default:
        return state
    }
  }  