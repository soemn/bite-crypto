import React from "react"
import logo from "../images/bite-crypto-small.png"

const Header = () => (
  <header>
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#f1f5fa" }}
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} style={{ height: "50px" }} alt="Bite Crypto" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                ICO Reviews
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/experty">
                  Experty
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
