import React, { Component } from 'react';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    renderList = () => {
        return this.props.users.map((user, idx) => {
            return <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{user.username}</td>
                <td>{user.address}</td>
            </tr>
        })
    }

    render() {
        return (
            <>
                <table width="100%" border="1px" cellPadding="10px">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Username</th>
                            <th>Address</th>
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