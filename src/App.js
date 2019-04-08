import React, { Component }  from 'react';
import Header from './components/Header'
import Search from './components/Search'
import ProductList from './components/ProductList'
import Card from './components/Card'
import items from "./data"

class App extends Component {
  render(){
    return (
      <div className="container">
        <Header/>
        <Search/>
        <hr className="my-4"/>
        <ProductList products={items.posts}/>
        {/* <div className="row">
          {items.map((item, i) => <Card key={i} item={item}/>)}
        </div> */}
      </div>
    )
  }
}

export default App
