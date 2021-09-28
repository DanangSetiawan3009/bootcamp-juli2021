import React, { Component } from 'react';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div style={{
                border: "1px solid red",
                padding: "10px 20px",
                borderRadius: 4
            }}>
                {this.props.children}
            </div>
        );
    }
}

export default Menu;