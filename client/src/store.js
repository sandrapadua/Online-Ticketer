

import { createStore, applyMiddleware, compose} from 'redux'
import reducers from './reducers'
import ReduxThunk from 'redux-thunk'
import {storeJwt} from './middleware'

// const reducer = combineReducers(reducers)
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


const enhancer = compose(
  applyMiddleware(ReduxThunk,storeJwt),
  devTools
)

const store = createStore(reducers, enhancer)

export default store