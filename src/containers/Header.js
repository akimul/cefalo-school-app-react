import React, { Component } from 'react'
import Modal from '../components/Modal'
import { connect } from 'react-redux'
import { searchProducts, toggleModal, setAuthenticated, resetState } from '../actions'

class Header extends Component {
    render() {
        const {
            isAuthenticated,
            username,
            toggleModal,
            setAuthenticated,
            resetState,
            showModal
          } = this.props
        return (         
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                        <ul className="navbar-nav mr-auto">
                            {isAuthenticated && username && <li className="nav-item active">
                                <a className="nav-link" href="#">Welcome {username}</a>
                            </li>}
                            <li className="nav-item">
                                <form className="form-inline">
                                    <input className="form-control mr-sm-2"
                                        type="text"
                                        placeholder="Search products"
                                        value={this.props.searchTerm}
                                        onChange={event => this.onInputChange(event.target.value)}
                                        aria-label="Search" />
                                </form>
                            </li>
                        </ul>
                    </div>
                    <div className="mx-auto order-0">
                        <a className="navbar-brand mx-auto" href="#">Search Products</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                        {!isAuthenticated &&
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <button className="btn btn-outline-success my-2 my-sm-0" onClick={toggleModal}>Login</button>
                                </li>
                            </ul>
                        }
                        {isAuthenticated &&
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <button className="btn btn-outline-success my-2 my-sm-0" onClick={resetState}>Logout</button>
                                </li>
                            </ul>
                        }
                    </div>

                </nav>
                {showModal && <Modal setAuthenticated={setAuthenticated} toggleModal={toggleModal}>
                </Modal>}
            </div>
        )
    }
    onInputChange(searchTerm) {
        this.props.searchProducts(searchTerm);
    }
}

const mapStateToProps = state => {
    return {
        showModal: state.showModal,
        isAuthenticated: state.authenticated,
        username: state.username,
        searchTerm: state.searchTerm,
    }
  }

export default connect(mapStateToProps, 
    {
        searchProducts,
        toggleModal,
        setAuthenticated,
        resetState
    })(Header)


