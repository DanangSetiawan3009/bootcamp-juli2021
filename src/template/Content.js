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

    editButton = async newUser => {
        // data unique => findIndex
        const { selectedUser, data: oldData } = this.state

        oldData.splice(selectedUser, 1, newUser)
        await this.setState({
            data: oldData,
            selectedUser: -1
        }, () => console.log("cb"))
        console.log("bawah");
        this.props.goToPage("contact")
    }

    updateSelectedUser = idx => {
        // a.push()
        this.setState({
            selectedUser: idx
        }, () => { })
        this.props.goToPage("login")
    }

    componentDidMount() {
        // fetch API terus update state
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {

                this.state.data.splice(0, 1)
                this.state.selectedUser = 10000

                // this.setState({
                //     data: json
                // })
            })
        // this.setState({
        //     data: [{
        //         username: "Admin",
        //         password: "1234",
        //         address: "Jakarta"
        //     }, {
        //         username: "User",
        //         password: "1234",
        //         address: "Bogor"
        //     }, {
        //         username: "Operator",
        //         password: "1234",
        //         address: "Depok"
        //     }]
        // })
    }

    render() {
        if (this.props.menu === "login") {
            const dataEdit = this.state.selectedUser >= 0 ? this.state.data[this.state.selectedUser] : {}
            return <Login addData={this.addButton} editData={this.editButton} editUser={dataEdit} />
        }

        if (this.props.menu === "contact")
            return <Contact users={this.state.data} setUser={this.updateSelectedUser} />

        return <Home />
    }
}

export default Content;