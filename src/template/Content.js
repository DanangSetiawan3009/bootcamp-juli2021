import React, { Component } from 'react';
import { Home, Contact, Login } from "../pages"


class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        if (this.props.menu === "login")
            return <Login />

        if (this.props.menu === "contact")
            return <Contact />

        return <Home />
    }
}

export default Content;