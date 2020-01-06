import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import productReducer from './reducers/products'

export const store = createStore(productReducer, applyMiddleware(thunkMiddleware, logger))

