import React, { Component } from "react"
import "./App.css"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main style={{ background: "#f1f5fa" }} />
        <Footer />
      </div>
    )
  }
}

export default App
