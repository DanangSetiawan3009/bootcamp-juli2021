import React, { Component } from 'react';



class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.idInterval = 0
    }

    renderList = () => {
        const list = this.props.users.map((user, idx) => {
            console.log("user:", user);
            return <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{user.username}</td>
                <td>{user.address}</td>
                <td>
                    <button onClick={() => this.props.setUser(user)}>Update</button>
                </td>
                <td>
                    <button>Delete</button>
                </td>
            </tr>
        })

        return list
    }

    componentDidMount() {
        this.idInterval = setInterval(() => {
            console.log("ini interval");
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.idInterval)
    }

    render() {
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