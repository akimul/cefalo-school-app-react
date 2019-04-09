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
        <ProductList products={this.state.filteredProducts}/>
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
}

export default App
