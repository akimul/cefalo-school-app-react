import React, { Component }  from 'react'
import Header from './components/Header'
import Search from './components/Search'
import ProductList from './components/ProductList'
import Card from './components/Card'
import items from "./data"
import * as services from './services/getProducts'

class App extends Component {

  state = {
    products: [],
    filteredProducts: []
  }

  componentDidMount() {
    this.getProducts();
  }


  render(){
    return (
      <div className="container">
        <Header/>
        <Search onSearchChange={term => this.onSearch(term)}/>
        <hr className="my-4"/>
        <ProductList products={this.state.filteredProducts} onUpdateVote={product=>this.updateVoteCount(product)}/>
      </div>
    )
  }


  getProducts() {
    services.getProducts().then(
      products=>{
        products.sort((a, b) => b.votes_count - a.votes_count);
        this.setState({products, filteredProducts: products});
      }
    ).catch(e => console.log(e))
  }

  onSearch(searchterm){
    let filteredProducts = this.state.products
    filteredProducts = filteredProducts.filter((product) => {
      return product.name.toLowerCase().includes(searchterm.toLowerCase()) || 
      product.tagline.toLowerCase().includes(searchterm.toLowerCase())
    })
    this.setState({
      filteredProducts
    })
  }

  updateVoteCount(product)
  {
    product.votes_count = product.votes_count + 1
    const index = this.state.filteredProducts.findIndex(item => item.slug === product.slug),
    products = [...this.state.products] 
    products[index] = product;
    products.sort((a, b) => b.votes_count - a.votes_count);
    this.setState({products, filteredProducts: products});
  }
}

export default App
