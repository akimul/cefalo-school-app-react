import { API_CALL_STARTED } from '../actions'

export default  (state=false, action) => {
   switch(action.type){
      case API_CALL_STARTED:
         return action.payload
      default:
         return state
   }
}