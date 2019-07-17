import React from 'react'
import ProductListItem from './ProductListItem'
import Loader from './Loader'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class ProductList extends React.Component {
    render(){
        if (this.props.apiCallStarted){
            return <Loader forLoader={true}/> 
        }
        if(this.props.products.length === 0){
            return <Loader forLoader={false}/>
        }
        
        const productListItems = this.props.products.map(product=><ProductListItem key={product.slug} product={product} /> )
        return (
            <div className="row list-row">
                {productListItems}
            </div>
        );
    }
}

// ProductList.propTypes = {
//     products : PropTypes.array,
//     onUpdateVote: PropTypes.func,
//     fetching: PropTypes.bool
// }

const mapStateToProps = state => {
    return {
      products: state.filteredProducts,
      apiCallStarted: state.apiCallStarted
    }
  }

export default connect(mapStateToProps)(ProductList)