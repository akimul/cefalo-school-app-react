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


export const updateVoteCount = product => (dispatch, getState)=> {
   product.votes_count = product.votes_count + 1
   let index = getState().products.findIndex(item => item.slug === product.slug)
   let products = Object.assign([],getState().products)
   products[index] = product
   products.sort((a, b) => b.votes_count - a.votes_count)
   dispatch({
      type: FETCH_PRODUCT,
      payload: products
  });
   if(getState().searchTerm){
      dispatch(searchProducts(getState().searchTerm))
   } else {
      dispatch({
         type: SEARCH_PRODUCT,
         payload: products
     })
   }
}

export const searchProducts = searchterm => (dispatch, getState) => {
   const filteredProducts = getState().products.filter((product) => {
      return product.name.toLowerCase().includes(searchterm.toLowerCase()) || 
      product.tagline.toLowerCase().includes(searchterm.toLowerCase())
    })
    const searchedProduct = Object.assign([], filteredProducts)
    dispatch({
        type: SEARCH_PRODUCT,
        payload: searchedProduct
    });
    dispatch({
      type: SEARCH_TERM,
      payload: searchterm
  });
}