import React, { Component } from 'react'
// import Header from './template/Header';
// import Navbar from './template/Navbar';
// import Content from './template/Content';
import { Header, Navbar, Content } from "./template"
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: "home"
    }
  }

  changePage = page => {
    this.setState({
      menu: page
    })
    // console.log(page);
  }

  render() {
    return (
      <>
        <Header />
        <Navbar goToPage={this.changePage} />
        <Content menu={this.state.menu} goToPage={this.changePage} />
      </>
    );
  }
}

export default App

/**
 * Tree Component:
 *    - App
 *        - Header
 *        - Navbar
 *              - Menu
 *        - Content
 *              - Login
 *              - Contact
 *              - Home
 *
 * Tugas:
 *      - Convert web list user ke dalam React (tanpa jsonplaceholder/data html biasa)
 *
 * Latihan:
 *      - Buat Home page
 *      - Buat form login
 *          - user "admin" dan password "1234" make redirect ke home, selain itu alert "Salah username / password"
 */