import React, { createContext } from 'react';

//context
export const LoginModalContext = React.createContext({
    username: null,
    showModal: false,
    toggleModal: () => { },
    isAuthenticated: false,
    setAuthentictaed: () => { },
    resetState: () => {}
});

//Provider
export class LoginModalProvider extends React.Component {
    getInitialState = () => {
        const initialState = {
            username: null,
            showModal: false,
            toggleModal: this.toggleModal.bind(this),
            isAuthenticated: false,
            setAuthenticated: this.setAuthenticated.bind(this),
            resetState: this.resetState.bind(this)
        }
        return initialState;
    }
    state = this.getInitialState()

    resetState() {
        this.setState(this.getInitialState());
    }

    toggleModal() {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    setAuthenticated(event) {
        console.log('cccc')
        if (event.target.username.value && event.target.password.value) {
            this.setState({
                isAuthenticated: !this.state.isAuthenticated,
                showModal: !this.state.showModal,
                username: event.target.username.value
            })
        }
    }

    render() {
        return (
            <LoginModalContext.Provider value={this.state}>
                {this.props.children}
            </LoginModalContext.Provider>
        );
    }
}

//Consumer
export const LoginModalConsumer = LoginModalContext.Consumer;