import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Search extends Component {
  state = {
    searchTerm: ''
  }
  
  render(){
    return (
      <div className="row">
        <div className="col">
          <form>
            <div className="form-row">
              <input 
              className="form-control form-control-lg" 
              type="text" 
              placeholder="Search products"
              value={this.state.searchTerm}
              onChange={event => this.onInputChange(event.target.value)} />
            </div>
          </form>
        </div>
      </div>
    )
  }

  onInputChange(searchTerm){  
    this.setState({
        searchTerm
    });
    this.props.onSearchChange(searchTerm);
  }
}

Search.propTypes = {
  onSearchChange : PropTypes.func
}

export default Search
