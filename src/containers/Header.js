import React from "react"
import logo from "../images/bite-crypto-small.png"
import styled from "styled-components"

const NavDropdown = styled.li.attrs({
  className: "nav-item dropdown"
})`
  :hover {
    cursor: pointer;
  }
`

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
            <NavDropdown>
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
              <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                <a className="dropdown-item nav-item" href="/experty">
                  Experty
                </a>
                <a className="dropdown-item nav-item" href="/tomochain">
                  TomoChain
                </a>
              </div>
            </NavDropdown>
            <NavDropdown>
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Guides
              </a>
              <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                <a className="dropdown-item nav-item" href="/binance">
                  Trading Cryptocurreny on Binance
                </a>
                <a className="dropdown-item nav-item" href="/gemini">
                  Trading Fiat to Crypto on Gemini
                </a>
              </div>
            </NavDropdown>
          </ul>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
