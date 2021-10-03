import React, { Component } from 'react';
import { Home, Contact, Login } from "../pages"


class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selectedUser: -1
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

    editButton = newUser => {
        // data unique => findIndex
        const { selectedUser, data: oldData } = this.state

        oldData.splice(selectedUser, 1, newUser)
        this.setState({
            data: oldData,
            selectedUser: -1
        })
        this.props.goToPage("contact")
    }

    updateSelectedUser = idx => {
        this.setState({
            selectedUser: idx
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
        const dataEdit = this.state.selectedUser >= 0 ? this.state.data[this.state.selectedUser] : {}
        if (this.props.menu === "login")
            return <Login addData={this.addButton} editData={this.editButton} editUser={dataEdit} />

        if (this.props.menu === "contact")
            return <Contact users={this.state.data} setUser={this.updateSelectedUser} />

        return <Home />
    }
}

export default Content;