import React, { Component } from 'react';
import { CircularProgress } from '@mui/material';
import { connect } from 'react-redux';
import { decodeToken } from "react-jwt";
import { RowInput } from "../../components"
// import { actionHandlerLogin } from "../../redux/action"
import "./login.css"
import { FirebaseContext } from '../../firebase';



class LoginFirebase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            address: "",
            // isLogin: false,
            isUpdate: false,
            stop: false,
            checked: false,
        }
        // this.stop = false
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

    goToContactPage = () => this.props.history.push("/contact")

    loginButton = () => {
        const { username, password } = this.state
        // if (username === "admin" && password === "1234") { // Bagaimana caranya me-reset value input ketika login success
        //     // this.setState({ isLogin: true })
        //     this.props.doLogin(true)
        //     this.resetForm()
        //     this.props.history.push("/")
        // } else alert("Invalid username or password!!")

        // this.props.loginHandler(username)
        fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ username, password })
        })
            .then(async resp => {
                const data = await resp.json()
                const { status, msg, token } = data
                if (status === "success") {
                    localStorage.setItem("token", token) // for persistent login
                    this.props.loginHandler(token)
                } else {
                    alert(msg)
                }
            })
            .catch(err => {
                console.warn(err)
            })
    }

    registerButton = () => {
        const { username, password, address } = this.state
        const newUser = {
            username, password, address
        }
        this.props.addData(newUser)
    }

    updateButton = () => {
        const { username, password, address } = this.state
        const newUser = {
            username, password, address
        }
        this.props.editData(newUser)
    }

    fullfillField = () => {
        const { idUser } = this.props.match.params
        console.log("idUser", idUser);

        const { username, address } = this.props.users.find(user => user.id === parseInt(idUser))

        // this.stop = true
        this.setState({
            username, address: address?.city,
            stop: true
        })
    }

    checkValue = () => {
        const { statusLogin1, token } = this.props
        console.log(statusLogin1)
        if (!statusLogin1) return

        const decodedToken = decodeToken(token)
        console.log(decodedToken)
        this.setState({
            username: decodedToken.username ?? "",
            checked: true
        })
    }

    onRegisterFirebase = () => {
        const { username, password } = this.state
        this.props.firebase2.createUser({
            email: username, password
        })
            .then(userCredential => {
                console.log("userCredential:", userCredential)
                alert("User created!")
            })
            .catch(err => {
                console.warn("ERROR:", err)
                alert(err.message)
            })
    }

    render() {
        // if (!this.state.checked) this.checkValue()
        // if (this.props.isCheckingToken) {
        //     return <div className="login-containter">
        //         <CircularProgress disableShrink />
        //     </div>
        // }

        return (
            <div className="login-containter">
                {/* {!this.state.stop && this.fullfillField()} */}
                <fieldset>
                    <legend>Value</legend>
                    <h1>Username: {this.state.username}</h1>
                    <h1>Password: {this.state.password}</h1>
                    <h1>Status Login: {this.props.statusLogin1.toString()}</h1>
                </fieldset>
                <div className="login-containter">
                    <RowInput
                        label="Email"
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
                    <RowInput
                        label="Address"
                        type="text"
                        name="address"
                        change={this.setValue}
                        valueState={this.state.address}
                    />
                    <div className="row-button">
                        <button onClick={this.loginButton}>Log In</button>
                        {
                            this.state.isUpdate
                                ?
                                <button onClick={this.updateButton}>Update</button>
                                :
                                <button onClick={this.registerButton}>Register</button>
                        }
                        <button onClick={this.goToContactPage}>Go To Contact</button>
                    </div>
                    <div className="row-button">
                        <button onClick={this.onRegisterFirebase}>Register Firebase</button>
                    </div>
                </div>
            </div>
        );
    }
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <FirebaseContext.Consumer>
                {firebase =>
                    <LoginFirebase {...this.props}
                        firebase2={firebase} />}
            </FirebaseContext.Consumer>
        );
    }
}

const mapStateToProps = state => ({ // state = {statusLogin: false, username: ""}
    // 3
    statusLogin1: state.loginRedux.statusLogin,
    token: state.loginRedux.token
})

const mapDispatchToProps = dispatch => ({
    loginHandler: token => dispatch({ type: "LOGIN_OKO", payload: token })
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);