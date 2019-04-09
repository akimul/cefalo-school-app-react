import React from 'react';
import ProductListItem from './ProductListItem';
import PropTypes from 'prop-types';

const ProductList = ({products}) => {
    const productList = products.map(product=><ProductListItem key={product.slug} product={product}/> );
    return (
        <div className="row">
            {productList}
        </div>
    );
};

export default ProductList;