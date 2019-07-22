import {combineReducers} from 'redux'
import productReducer from './productReducer'
import searchReducer from './searchReducer'
import apiCallReducer from './apiCallReducer'
import searchTermReducer from './searchTermReducer'
import showModal from './modalReducer'
import authenticated from './authenticationReducer'
import username from './userNameReducer'

export default combineReducers({
   products: productReducer,
   filteredProducts: searchReducer,
   apiCallStarted: apiCallReducer,
   searchTerm: searchTermReducer,
   showModal: showModal,
   authenticated: authenticated,
   username: username
})