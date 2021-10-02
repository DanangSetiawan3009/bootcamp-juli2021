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
 *              - Login = form
 *              - Contact = table
 *              - Home
 *
 *
 * Latihan Regis Data:
 *      - Naikan data ke parent antara Login dan Contact
 *      - Kirim function untuk addData ke Login
 *      - Tambahkan parameter pada function addData
 *      - Pada function addData di Content, terima parameter kiriman Login
 *      - setState newData (data yang sudah disisipkan data baru) ke dalam state data
 *
 * Tugas:
 *      - Convert web list user ke dalam React (tanpa jsonplaceholder/data html biasa)
 *
 * Latihan:
 *      - Buat Home page
 *      - Buat form login
 *          - user "admin" dan password "1234" make redirect ke home, selain itu alert "Salah username / password"
 *
 * Tugas:
 *      - Buat fitur Update & Delete
 *      - Setiap data yang ada di list, harus bisa login
 *      - Sebelum login, halaman Contact tidak bisa dibuka/hidden
 */