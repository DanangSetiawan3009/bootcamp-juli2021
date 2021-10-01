import React, { Component } from 'react';
import "./menu.css"


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="menu" style={{ backgroundColor: this.props.color }}>
                {this.props.children}
            </div>
        );
    }
}

export default Menu;