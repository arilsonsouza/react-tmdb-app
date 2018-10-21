import { combineReducers } from 'redux'
import movies from './Movies'
import query from './Query'

export default combineReducers({
    movies,
    query
})