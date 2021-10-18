import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';



class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
        this.idInterval = 0
    }

    renderList = () => {
        // console.log(this.state.users);
        const list = this.state.users.map((user, idx) => {
            // console.log("user:", user);
            return <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{user.username}</td>
                <td>{user.address?.city}</td>
                <td>
                    <button onClick={() => this.props.history.push("/login/" + idx)}>Update</button>
                </td>
                <td>
                    <button>Delete</button>
                </td>
            </tr>
        })

        return list
    }

    fetchUsers = async () => {
        try {
            const token = localStorage.getItem('token')
            const response = await fetch("http://localhost:8080/users", {
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + token
                }
            })
            const { data } = await response.json()
            console.log("response:", data);
            if (data) this.setState({ users: data })
        } catch (err) {
            console.log("ERROR:", err);
        }
    }

    componentDidMount() {
        // this.fetchUsers()
        console.warn(this.props.users)
        // this.setState({
        //     users: this.props.users
        // })
        this.idInterval = setInterval(() => {
            // console.log("ini interval");
            // get api agar data selalu update dengan server
        }, 1000)
    }

    static getDerivedStateFromProps(props, state) {
        console.log("props", props);
        console.log("state", state);
        return {
            users: props.users
        }
    }

    componentWillUnmount() {
        clearInterval(this.idInterval)
    }

    render() {
        // if (!this.props.statusLogin)
        //     return <Redirect to="/" />

        return (
            <>
                <table width="400px" border="1px" cellPadding="10px">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Username</th>
                            <th>Address</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </table>

            </>
        );
    }
}

export default Contact;

/**
 * Latihan:
 *         - Tambah 1 input pada form login sebagai Address
 *         - Tambah 1 button pada form login sebagai Register
 *              - Ketika di klik register, maka data yang ada di form login akan masuk ke list table
 */