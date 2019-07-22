import React, { Component }  from 'react'
import Header from './components/Header'
// import Search from './components/Search'
import ProductList from './components/ProductList'
import * as services from './services/getProducts'
import { LoginModalProvider } from './contexts/LoginModalContext'
import { connect } from 'react-redux'
import { fetchProduct, fetchViaUrl } from './actions'

class App extends Component {
  componentDidMount() {
    this.props.fetchViaUrl()
  }

  render(){
    return (
      <div className="container">
        <LoginModalProvider>
          <Header/>
          <ProductList/>
        </LoginModalProvider>
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
