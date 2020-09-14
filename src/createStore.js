import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import RootReducer from './reducers'

export const middlewares = [thunk]

export const store = createStore(RootReducer, applyMiddleware(...middlewares))