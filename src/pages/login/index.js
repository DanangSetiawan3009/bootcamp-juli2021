import React, { Component } from 'react';
import "./login.css"



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="login-containter">
                <fieldset>
                    <legend>Value</legend>
                    <h1>Username: </h1>
                    <h1>Password: </h1>
                </fieldset>
                <div className="login-containter">
                    <div className="row-input">
                        <span>Username</span>
                        <input type="text" />
                    </div>
                    <div className="row-input">
                        <span>Password</span>
                        <input type="password" />
                    </div>
                    <div className="row-button">
                        <button>Log In</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;