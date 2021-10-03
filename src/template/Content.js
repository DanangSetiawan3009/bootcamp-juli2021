import React, { Component } from 'react';
import { Home, Contact, Login } from "../pages"


class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selectedUser: {}
        }
    }

    addButton = newUser => {
        const newData = this.state.data
        newData.push(newUser)
        this.setState({
            data: newData
        })
        this.props.goToPage("contact")
    }

    updateSelectedUser = user => {
        this.setState({
            selectedUser: user
        })
        this.props.goToPage("login")
    }

    componentDidMount() {
        // fetch API terus update state
        this.setState({
            data: [{
                username: "Admin",
                password: "1234",
                address: "Jakarta"
            }, {
                username: "User",
                password: "1234",
                address: "Bogor"
            }, {
                username: "Operator",
                password: "1234",
                address: "Depok"
            }]
        })
    }

    render() {
        if (this.props.menu === "login")
            return <Login addData={this.addButton} editUser={this.state.selectedUser} />

        if (this.props.menu === "contact")
            return <Contact users={this.state.data} setUser={this.updateSelectedUser} />

        return <Home />
    }
}

export default Content;