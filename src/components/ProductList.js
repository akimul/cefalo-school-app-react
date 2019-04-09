import React from 'react'
import ProductListItem from './ProductListItem'
import PropTypes from 'prop-types'

const ProductList = ({products, onUpdateVote}) => {
    const productListItems = products.map(product=><ProductListItem key={product.slug} product={product} onUpdateVote={onUpdateVote}/> );
    return (
        <div className="row">
            {productListItems}
        </div>
    );
};

export default ProductList;