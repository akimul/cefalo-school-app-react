import {combineReducers} from 'redux'
import productReducer from './productReducer'
import searchReducer from './searchReducer'
import apiCallReducer from './apiCallReducer'
import searchTermReducer from './searchTermReducer'

export default combineReducers({
   products: productReducer,
   filteredProducts: searchReducer,
   apiCallStarted: apiCallReducer,
   searchTerm: searchTermReducer
})