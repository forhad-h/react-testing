
import checkPropTypes from 'check-prop-types'
import { applyMiddleware, createStore } from 'redux'

import RootReducer from '../src/reducers/'
import { middlewares } from '../src/createStore'

export const findByTestAttr = (component, attr) => component.find(`[data-test='${attr}']`)

// eslint-disable-next-line react/forbid-foreign-prop-types
export const checkProps = (component, expectedProps) => checkPropTypes(component.propTypes, expectedProps, 'props', component.name)

export const testStore = initialState => createStore(RootReducer, initialState, applyMiddleware(...middlewares))