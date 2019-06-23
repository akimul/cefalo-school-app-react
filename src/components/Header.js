import React, { Component } from 'react'
import Modal from './Modal'
import { LoginModalConsumer } from './LoginModalContext'

class Header extends Component {
    constructor(props) {
        super(props);
        // this.state = { showModal: false };
        // this.toggleModal = this.toggleModal.bind(this)
    }

    // toggleModal() {
    //     this.setState({
    //         showModal: !this.state.showModal
    //     })
    // }
    render() {

        // const modal = this.state.showModal && <Modal>
        //     <div className="modal fade show" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" data-keyboard="false" data-backdrop="static" style={{ display: 'block' }} aria-modal="true">
        //         <div className="modal-dialog" role="document">
        //             <div className="modal-content">
        //                 <div className="modal-header">
        //                     <h5 className="modal-title" id="exampleModalLabel">Login to see products</h5>
        //                     <button onClick={this.toggleModal} type="button" className="close" aria-label="Close">
        //                         <span aria-hidden="true">&times;</span>
        //                     </button>
        //                 </div>
        //                 <div className="modal-body">
        //                     <label htmlFor="username">Username</label>
        //                     <input type="text" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter username" />
        //                     <label htmlFor="password">Password</label>
        //                     <input type="password" className="form-control" id="password" aria-describedby="passwordHelp" placeholder="Enter password" />
        //                 </div>
        //                 <div className="modal-footer">
        //                     <button type="button" className="btn btn-primary">Login</button>
        //                     <button onClick={this.toggleModal} type="button" className="btn btn-secondary">Close</button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </Modal>;
        return (
            <LoginModalConsumer>
                {({ showModal, toggleModal }) => (
                    <div>
                        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                            <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Hello akash</a>
                                    </li>
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
                                <ul className="navbar-nav ml-auto">

                                    <li className="nav-item">
                                        <button className="btn btn-outline-success my-2 my-sm-0" onClick={toggleModal}>Login</button>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        {showModal && <Modal>
                            <div className="modal fade show" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" data-keyboard="false" data-backdrop="static" style={{ display: 'block' }} aria-modal="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Login to see products</h5>
                                            <button onClick={toggleModal} type="button" className="close" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <label htmlFor="username">Username</label>
                                            <input type="text" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter username" />
                                            <label htmlFor="password">Password</label>
                                            <input type="password" className="form-control" id="password" aria-describedby="passwordHelp" placeholder="Enter password" />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-primary">Login</button>
                                            <button onClick={toggleModal} type="button" className="btn btn-secondary">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal>}
                    </div>
                )}
            </LoginModalConsumer>

        )
    }
    onInputChange(searchTerm) {
        this.props.onSearchChange(searchTerm);
    }
}

export default Header

