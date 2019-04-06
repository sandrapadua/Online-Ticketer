// import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
// import ReduxThunk from 'redux-thunk'
// import reducers from './reducers'
// import {storeJwt} from './middleware'

// const reducer = combineReducers(reducers)

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// const enhancer = compose(
//   applyMiddleware(ReduxThunk, storeJwt),
//   devTools
// )

// const store = createStore(reducer, enhancer)

// export default store

import { createStore, applyMiddleware, compose,combineReducers} from 'redux'
import reducers from './reducers'
import ReduxThunk from 'redux-thunk'
import {storeJwt} from './middleware'

const reducer = combineReducers(reducers)
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


const enhancer = compose(
  applyMiddleware(ReduxThunk,storeJwt),
  devTools
)

const store = createStore(reducers, enhancer)

export default store