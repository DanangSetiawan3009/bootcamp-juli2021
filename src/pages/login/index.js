import React, { Component } from 'react';
import { RowInput } from "../../components"
import "./login.css"



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isLogin: false
        }
    }

    setValue = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    resetForm = () => {
        this.setState({
            username: "",
            password: ""
        })
    }

    loginButton = () => {
        const { username, password } = this.state
        if (username === "admin" && password === "1234") { // Bagaimana caranya me-reset value input ketika login success
            this.setState({ isLogin: true })
            this.resetForm()
        } else alert("Invalid username or password!!")
    }

    render() {
        return (
            <div className="login-containter">
                <fieldset>
                    <legend>Value</legend>
                    <h1>Username: {this.state.username}</h1>
                    <h1>Password: {this.state.password}</h1>
                    <h1>Status Login: {this.state.isLogin.toString()}</h1>
                </fieldset>
                <div className="login-containter">
                    <RowInput
                        label="Username"
                        type="text"
                        name="username"
                        change={this.setValue}
                        valueState={this.state.username}
                    />
                    <RowInput
                        label="Password"
                        type="password"
                        name="password"
                        change={this.setValue}
                        valueState={this.state.password}
                    />
                    <div className="row-button">
                        <button onClick={this.loginButton}>Log In</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;