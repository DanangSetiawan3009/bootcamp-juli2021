import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            username1: "",
            password: ""
        }
    }

    changeButton = () => {
        this.setState({
            counter: 5,
            username: "Admin 5",
        })
    }

    plusOneButton = () => {
        // this.setState({
        //     counter: this.state.counter + 1
        // })

        this.setState(oldState => ({
            counter: oldState.counter + 1,
            username: "Admin "
        }))
    }

    updateUsername = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}>
                <div>
                    <div>{this.state.username1}</div>
                    <div>{this.state.password}</div>
                    <button onClick={this.changeButton}>5</button>
                    <span>{this.state.counter}</span>
                    <button onClick={this.plusOneButton}>+1</button>
                </div>
                <div>
                    <div>
                        <span>Username</span>
                        <input type="text" name="username1" onChange={this.updateUsername} />
                    </div>
                    <div>
                        <span>Password</span>
                        <input type="password" name="password" onChange={this.updateUsername} />
                    </div>
                </div>
            </div >
        );
    }
}

export default Content;