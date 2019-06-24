import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('modal-root')


class Modal extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.setAuthenticated(event)
    }
    render() {
        return ReactDOM.createPortal(
            <div className="modal fade show" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" data-keyboard="false" data-backdrop="static" style={{ display: 'block' }} aria-modal="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <form onSubmit={this.handleSubmit}>
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Login to vote</h5>
                                <button onClick={this.props.toggleModal} type="button" className="close" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <label htmlFor="username">Username</label>
                                <input name="username" type="text" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter username" />
                                <label htmlFor="password">Password</label>
                                <input name="password" type="password" className="form-control" id="password" aria-describedby="passwordHelp" placeholder="Enter password" />
                            </div>
                            <div className="modal-footer">
                                <input type="submit" value="Login" className="btn btn-primary" />
                                <button onClick={this.props.toggleModal} type="button" className="btn btn-secondary">Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>,
            this.el,
        );
    }
}

export default Modal