import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Contact, Login } from "../pages"


class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selectedUser: -1,
            isLogin: false
        }
    }

    updateLogin = status => this.setState({ isLogin: status })

    addButton = newUser => {
        const newData = this.state.data
        newData.push(newUser)
        this.setState({
            data: newData
        })
        this.props.goToPage("contact")
    }

    editButton = async newUser => {
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
        this.setState({
            selectedUser: idx
        }, () => { })
        this.props.goToPage("login")
    }

    componentDidMount() {
        // fetch API terus update state
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.setState({ data: json }))
    }

    render() {
        const dataEdit = this.state.selectedUser >= 0 ?
            this.state.data[this.state.selectedUser] :
            {}
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                {
                    /* {
                        // this.state.isLogin &&
                        <Route path="/contact">
                            <Contact
                                users={this.state.data}
                                setUser={this.updateSelectedUser}
                                statusLogin={this.state.isLogin}
                            />
                        </Route>} */
                }
                <Route
                    path="/contact"
                    children={
                        (props) =>
                            <Contact
                                {...props}
                                users={this.state.data}
                                setUser={this.updateSelectedUser}
                                statusLogin={this.state.isLogin}
                            />
                    }
                />
                <Route
                    path="/login/:idUser"
                    children={
                        (props) =>
                            <Login
                                {...props}
                                users={this.state.data}
                                statusLogin={this.state.isLogin}
                                doLogin={this.updateLogin}
                                addData={this.addButton}
                                editData={this.editButton}
                                editUser={dataEdit}
                            />
                    }
                />
                <Route
                    path="/login"
                    children={
                        (props) =>
                            <Login
                                {...props}
                                users={this.state.data}
                                statusLogin={this.state.isLogin}
                                doLogin={this.updateLogin}
                                addData={this.addButton}
                                editData={this.editButton}
                                editUser={dataEdit}
                            />
                    }
                />
                <Route children={() => <h1>Page Not Found!!</h1>} />
            </Switch>
        )
        /*
        if (this.props.menu === "login") {
            const dataEdit = this.state.selectedUser >= 0 ? this.state.data[this.state.selectedUser] : {}
            return <Login addData={this.addButton} editData={this.editButton} editUser={dataEdit} />
        }

        if (this.props.menu === "contact")
            return <Contact users={this.state.data} setUser={this.updateSelectedUser} />

        return <Home />
        */
    }
}

export default Content;