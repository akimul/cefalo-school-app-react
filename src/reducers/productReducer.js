import { FETCH_PRODUCT} from '../actions'

export default  (state=[], action) => {
   switch(action.type){
      case FETCH_PRODUCT:
         return action.payload
      default:
      return state
   }
}