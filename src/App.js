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
  }

  componentDidMount() {
    this.onSearch();
  }

  render(){
    return (
      <div className="container">
        <Header/>
        <Search onSearchChange={term => this.onSearch(term)}/>
        <hr className="my-4"/>
        <ProductList products={this.state.products}/>
      </div>
    )
  }


  onSearch(searchTerm) {
    services.getProducts().then(
      products=>{
        this.setState({products});
      }
    ).catch(e => console.log(e))
  }
}

export default App
