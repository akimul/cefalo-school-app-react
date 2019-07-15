import React, { Component }  from 'react'
import Header from './components/Header'
// import Search from './components/Search'
import ProductList from './components/ProductList'
import * as services from './services/getProducts'
import { LoginModalProvider } from './contexts/LoginModalContext'
import { connect } from 'react-redux'
import { fetchProduct, fetchViaUrl } from './actions'

class App extends Component {

  state = {
    products: [],
    filteredProducts: [],
    searchTerm: '',
    apiCallStarted: false,
  }

  componentDidMount() {
    this.props.fetchViaUrl()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.products !== prevState.products) {
      this.onSearch(this.state.searchTerm)
    }
  }

  render(){
    return (
      <div className="container">
        <LoginModalProvider>
          <Header/>
          <ProductList
            onUpdateVote={product=>this.updateVoteCount(product)}/>
        </LoginModalProvider>
      </div>
    )
  }


  // getProducts() {
  //   this.setState({apiCallStarted:true})
  //   services.getProducts().then(
  //     products=>{
  //       products.sort((a, b) => b.votes_count - a.votes_count)
  //       this.setState({products, filteredProducts: products, apiCallStarted: false})
  //     }
  //   ).catch(e => {
  //     this.setState({apiCallStarted: false})
  //     console.log(e)
  //   })
  // }

  // onSearch(searchterm){
  //   let filteredProducts = this.state.products
  //   filteredProducts = filteredProducts.filter((product) => {
  //     return product.name.toLowerCase().includes(searchterm.toLowerCase()) || 
  //     product.tagline.toLowerCase().includes(searchterm.toLowerCase())
  //   })
  //   this.setState({
  //     filteredProducts, 
  //     searchTerm: searchterm
  //   })
  // }

  updateVoteCount(product)
  {
    product.votes_count = product.votes_count + 1
    const index = this.state.products.findIndex(item => item.slug === product.slug)
    const products = [...this.state.products] 
    products[index] = product
    products.sort((a, b) => b.votes_count - a.votes_count)
    this.setState({products})
  }
}

const mapStateToProps = state => {
  return {
    products: state.filteredProducts,
    apiCallStarted: state.apiCallStarted
  }
}
export default connect(mapStateToProps, 
  {
    fetchProduct,
    fetchViaUrl
  })(App)
