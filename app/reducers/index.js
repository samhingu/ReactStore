import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { urls } from './urls'

const rootReducer = combineReducers({ routing: routerReducer,urls })

export default rootReducer
