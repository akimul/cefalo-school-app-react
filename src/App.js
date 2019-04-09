import React, { Component }  from 'react'
import Header from './components/Header'
import Search from './components/Search'
import ProductList from './components/ProductList'
import * as services from './services/getProducts'

class App extends Component {

  state = {
    products: [],
    filteredProducts: [],
    searchTerm: '',
    apiCallStarted: false
  }

  componentDidMount() {
    this.getProducts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.products !== prevState.products) {
      this.onSearch(this.state.searchTerm);  
    }
  }

  render(){
    return (
      <div className="container">
        <Header/>
        <Search onSearchChange={term => this.onSearch(term)} searchTerm={this.state.searchTerm}/>
        <hr className="my-4"/>
        <ProductList fetching={this.state.apiCallStarted} products={this.state.filteredProducts} 
          onUpdateVote={product=>this.updateVoteCount(product)}/>
      </div>
    )
  }


  getProducts() {
    this.setState({apiCallStarted:true})
    services.getProducts().then(
      products=>{
        products.sort((a, b) => b.votes_count - a.votes_count)
        this.setState({products, filteredProducts: products, apiCallStarted: false})
      }
    ).catch(e => {
      this.setState({apiCallStarted: false})
      console.log(e)
    })
  }

  onSearch(searchterm){
    let filteredProducts = this.state.products
    filteredProducts = filteredProducts.filter((product) => {
      return product.name.toLowerCase().includes(searchterm.toLowerCase()) || 
      product.tagline.toLowerCase().includes(searchterm.toLowerCase())
    })
    this.setState({
      filteredProducts, 
      searchTerm: searchterm
    })
  }

  updateVoteCount(product)
  {
    product.votes_count = product.votes_count + 1
    const index = this.state.products.findIndex(item => item.slug === product.slug)
    const products = [...this.state.products] 
    products[index] = product;
    products.sort((a, b) => b.votes_count - a.votes_count)
    this.setState({products});
  }
}

export default App
