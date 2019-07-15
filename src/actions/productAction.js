import products from '../data'

export const FETCH_PRODUCT = 'FETCH_PRODUCT'
export const SEARCH_PRODUCT = 'SEARCH_PRODUCT'
export const API_CALL_STARTED = 'API_CALL_STARTED'
export const SEARCH_TERM = 'SEARCH_TERM'
export const PRODUCT_URL = 'https://raw.githubusercontent.com/akimul/cefalo-school-app-react/master/src/data.json'

export const fetchProduct = () => {
   return {
      type: FETCH_PRODUCT,
      payload: products.posts
   }
}

export const fetchViaUrl = () => {
   return async function fetchThenDispatch(dispatch) {
      dispatch({
         type: API_CALL_STARTED,
         payload: true
      })
      try {
         const response = await fetch(PRODUCT_URL);
      const products = await response.json();
      dispatch({
          type: FETCH_PRODUCT,
          payload: products.posts
      });
      dispatch({
         type: SEARCH_PRODUCT,
         payload: products.posts
     });
     dispatch({
      type: API_CALL_STARTED,
      payload: false
   })
      }
      catch{
         dispatch({
            type: API_CALL_STARTED,
            payload: false
         })
      }
      
  }
}

export const searchProducts = searchterm => (dispatch, getState) => {
   const filteredProducts = getState().products.filter((product) => {
      return product.name.toLowerCase().includes(searchterm.toLowerCase()) || 
      product.tagline.toLowerCase().includes(searchterm.toLowerCase())
    })
    dispatch({
        type: SEARCH_PRODUCT,
        payload: filteredProducts
    });
    dispatch({
      type: SEARCH_TERM,
      payload: searchterm
  });
}