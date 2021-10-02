import React, { Component } from 'react';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shape: "0"
        }
    }

    changeShape = () => {
        if (this.state.shape === "0") {
            this.setState({
                shape: "50%"
            })
        } else {
            this.setState({
                shape: "0"
            })
        }

        this.setState(oldState => {
            console.log(oldState);
            if (oldState.shape === "0")
                return {
                    shape: "50%"
                }

            return {
                shape: "0"
            }
        })

        this.setState(oldState => {
            return {
                shape: oldState.shape === "0" ? "50%" : "0"
            }
        })

        this.setState(oldState => ({
            shape: oldState.shape === "0" ? "50%" : "0"
        }))
    }

    render() {
        return (
            <>
                <div style={{
                    width: 50,
                    height: 50,
                    border: "1px solid red",
                    marginLeft: 400,
                    borderRadius: this.state.shape
                }} />
                <button onClick={this.changeShape}>Change Shape</button>
            </>
        );
    }
}

export default Contact;