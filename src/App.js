import React, { Component } from 'react'
// import Header from './template/Header';
// import Navbar from './template/Navbar';
// import Content from './template/Content';
import { Header, Navbar, Content } from "./template"
import "./App.css"

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Navbar />
        <Content />
      </>
    );
  }
}

export default App

/**
 * Tugas:
 *      - Convert web list user ke dalam React (tanpa jsonplaceholder/data html biasa)
 */