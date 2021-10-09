import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import "./menu.css"


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const target = this.props.target
        return (
            <Link to={target}>
                <div
                    className="menu"
                    style={{ backgroundColor: this.props.color }}
                >
                    {this.props.children}
                </div>
            </Link>
        );
    }
}

export default Menu;