import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from "react-redux"
// import Header from './template/Header';
// import Navbar from './template/Navbar';
// import Content from './template/Content';
import { CircularProgress } from '@mui/material';
import { Header, Navbar, Content } from "./template"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: "home",
      isCheckingToken: true
    }
  }

  changePage = page => {
    this.setState({
      menu: page
    })
    // console.log(page);
  }

  checkingToken = () => {
    const token = localStorage.getItem("token")
    if (token) {
      fetch("http://localhost:8080/verify", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }
      })
        .then(async resp => {
          const data = await resp.json()
          const { status, msg } = data
          if (status === "success") {
            this.props.loginHandler(token)
          } else {
            alert(msg)
            localStorage.removeItem('token')
          }
        })
        .catch(err => {
          console.warn(err)
          alert("Internal Server Error!")
          localStorage.removeItem('token')
        })
        .finally(() => this.setState({ isCheckingToken: false }))
    } else this.setState({ isCheckingToken: false })
  }

  componentDidMount() {
    setTimeout(this.checkingToken, 3000)
  }

  render() {
    if (this.state.isCheckingToken) {
      return <div className="login-containter">
        <CircularProgress disableShrink />
      </div>
    }

    return (
      <Router>
        <Header />
        <Navbar goToPage={this.changePage} />
        <Content
          menu={this.state.menu}
          goToPage={this.changePage}
        />
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginHandler: token => dispatch({ type: "LOGIN_OKO", payload: token })
})

export default connect(null, mapDispatchToProps)(App);

/**
 * Tree Component:
 * - Index
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
 *
 * Solution:
 *      - Buat kolom action pada table list
 *      - Buat tombol update & delete,
 *      - Buat function untuk masing-masing button
 *
 *
 * Latihan:
 *      - Minimal Gunakan 3 UI Frameworks
 *      - Minimal menggunakan 1 component per Frameworks
 *
 *
 * Latihan:
 *      - Implementasikan Edit user tanpa menggunakan state & props (untuk data yang di edit)
 *
 *
 * Tugas:
 *      - Buatlah login yang sudah terintegrasi dengan Backend
 *      - Buatlah 1 halaman profile yang menampilkan profile user yang login
 *
 * Latihan:
 *      - Gunakan redux untuk menyimpan list user
 *      - Gunakan redux untuk menyimpan statusLogin & userLogin
 */