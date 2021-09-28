import React, { Component } from 'react';
import Menu from '../components/menu';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div style={{
                marginTop: 10,
                display: 'flex',
                justifyContent: "flex-start",
                gap: 10,
                alignItems: "center"
            }}>
                <Menu>Home</Menu>
                <Menu>Contact</Menu>
                <Menu>Log In</Menu>
            </div>
        );
    }
}

export default Navbar;