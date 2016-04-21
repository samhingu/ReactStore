import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { urls } from './urls'
import { categories } from './categories'

const rootReducer = combineReducers({ routing: routerReducer, urls, categories })

export default rootReducer
