import React, { createContext } from 'react';

export const LoginModalContext = React.createContext({
    username: null,
    showModal: false,
    toggleModal: () => { },
    isAuthenticated: false,
    setAuthentictaed: () => { }
});

export class LoginModalProvider extends React.Component {
    updateUsername = newUsername => {
        this.setState({ username: newUsername });
    };

    state = {
        username: null,
        showModal: false,
        toggleModal: this.toggleModal.bind(this),
        isAuthenticated: false,
        setAuthentictaed: this.setAuthentictaed.bind(this),
        setUserName: this.setUserName.bind(this)
    };

    toggleModal() {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    setAuthentictaed() {
        this.setState({
            isAuthenticated: !this.state.setAuthentictaed
        })
    }

    setUserName (name) {
        this.setState({
            username: name
        })
    }
    render() {
        return (
            <LoginModalContext.Provider value={this.state}>
                {this.props.children}
            </LoginModalContext.Provider>
        );
    }
}

export const LoginModalConsumer = LoginModalContext.Consumer;