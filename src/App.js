import React, { Component }  from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import { connect } from 'react-redux'
import { fetchProduct, fetchViaUrl } from './actions'

class App extends Component {
  componentDidMount() {
    this.props.fetchViaUrl()
  }

  render(){
    return (
      <div className="container">   
          <Header/>
          <ProductList/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    // products: state.filteredProducts,
    // apiCallStarted: state.apiCallStarted
  }
}
export default connect(mapStateToProps, 
  {
    fetchProduct,
    fetchViaUrl
  })(App)
