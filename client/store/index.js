import { createStore, applyMiddleware, combineReducers} from 'redux'
import { logger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import productsReducer from './reducers/products'
import userReducer from './reducers/user'

const reducer = combineReducers({
    productsReducer,
    userReducer
})

export const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger))

export * from './reducers/products'
export * from './reducers/user'
