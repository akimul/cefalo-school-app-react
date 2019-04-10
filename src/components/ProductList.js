import React from 'react'
import ProductListItem from './ProductListItem'
import Loader from './Loader'
import PropTypes from 'prop-types'

const ProductList = ({products, onUpdateVote, fetching}) => {
    if (fetching){
        return <Loader forLoader={true}/> 
    }
    if(products.length === 0){
        return <Loader forLoader={false}/>
    }
    
    const productListItems = products.map(product=><ProductListItem key={product.slug} product={product} onUpdateVote={onUpdateVote}/> )
    return (
        <div className="row list-row">
            {productListItems}
        </div>
    );
};

ProductList.propTypes = {
    products : PropTypes.array,
    onUpdateVote: PropTypes.func,
    fetching: PropTypes.bool
}

export default ProductList