import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux' 
import { searchProducts, toggleModal, updateVoteCount } from '../actions'

class ProductListItem extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(product, isAuthenticated, toggleModal){
        if(isAuthenticated){    
            this.props.updateVoteCount(product)            
        }else {
            toggleModal()
        }
    }

    render(){
        const {
            name,
            tagline,
            votes_count,
            thumbnail: {image_url},
            user: { 
                name: username, 
                image_url: {
                    original: user_image
                }
            }
          } = this.props.product
          
        return (          
            <div className="my-item d-flex flex-column flex-md-row list-box">
                <p className="my-item__image mb-3 mb-md-0 mr-md-3 pro-image">
                    <img src={image_url} alt={name} className="img-fluid rounded mx-auto d-block" />
                </p>
                <div className="my-item__text description">
                    <h2>
                        <span className="vote" onClick={()=>this.handleClick(this.props.product, this.props.isAuthenticated, this.props.toggleModal)}> </span> {votes_count}
                    </h2>
                    <p className="title-text bold-font">{name}</p>
                    <p className="bold-font">{tagline}</p>
                    <p className="avatar-text">
                        Submitted by: <img src={user_image} alt={username} className="avatar"></img>
                    </p>
                </div>
            </div>
        ) 
    }
};


ProductListItem.propTypes = {
    product : PropTypes.object,
    updateVoteCount: PropTypes.func,
}

const mapStateToProps = state => {
    return {
      products: state.filteredProducts,
      searchTerm: state.searchTerm,
      isAuthenticated: state.authenticated,
    }
  }

export default connect(mapStateToProps, 
    {
      updateVoteCount,
      searchProducts,
      toggleModal
    })(ProductListItem)