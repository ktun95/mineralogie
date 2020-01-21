import { createStore, applyMiddleware, combineReducers} from 'redux'
import { logger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import products from './reducers/products'
import user from './reducers/user'

const reducer = combineReducers({
    products,
    user
})

export const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger))

export * from './reducers/products'
export * from './reducers/user'
