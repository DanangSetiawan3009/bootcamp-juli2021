import React, { Component } from 'react';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                username: "Admin",
                address: "Jakarta"
            }, {
                username: "User",
                address: "Bogor"
            }, {
                username: "Operator",
                address: "Depok"
            }]
        }
    }

    addButton = () => {
        const obj = {
            username: "Operator 1",
            address: "Tangerang"
        }

        const newData = this.state.data
        newData.push(obj)
        this.setState({
            data: newData
        })
    }

    renderList = () => {
        return this.state.data.map((user, idx) => {
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
                <button onClick={this.addButton}>Add Data</button>
            </>
        );
    }
}

export default Contact;