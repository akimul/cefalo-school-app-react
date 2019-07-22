import { USERNAME } from '../actions'

export default  (state='', action) => {
   switch(action.type){
      case USERNAME:
         return action.payload
      default:
         return state
   }
}