import products from '../data'

export const FETCH_PRODUCT = 'FETCH_PRODUCT'

export const fetchProduct = () => {
   return {
      type: FETCH_PRODUCT,
      payload: products.posts
   }
}