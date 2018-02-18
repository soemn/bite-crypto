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

const NavItem = styled.a.attrs({
  className: "nav-link"
})`
  text-transform: uppercase;
  color: #253137 !important;
  font-family: "Libre Franklin";
  font-weight: 1000;
  margin: 0 6px;
  :hover {
    text-decoration: underline !important;
    color: black !important;
  }
`

const DropdownItem = styled.a.attrs({
  className: "nav-link"
})`
  margin-left: 5px;
  font-family: "Libre Franklin";
  font-weight: 1000;
  :hover {
    color: black !important;
    text-decoration: underline !important;
    background: none;
  }
`

const NavMain = styled.nav.attrs({
  className: "navbar navbar-expand-lg navbar-light"
})`
  background-color: #c9dff6;
`

const CollapseButton = styled.button.attrs({
  className: "navbar-toggler"
})``

const Header = () => (
  <header>
    <NavMain className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} style={{ height: "50px" }} alt="Bite Crypto" />
        </a>
        <CollapseButton
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </CollapseButton>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 pullRight">
            <li className="nav-item">
              <NavItem href="/">Home</NavItem>
            </li>
            <li className="nav-item">
              <NavItem href="/about">About</NavItem>
            </li>
            <NavDropdown>
              <NavItem
                className="dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                ICO Reviews
              </NavItem>
              <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                <DropdownItem className="dropdown-item" href="/experty">
                  Experty
                </DropdownItem>
                <DropdownItem className="dropdown-item" href="/tomochain">
                  TomoChain
                </DropdownItem>
              </div>
            </NavDropdown>
            <NavDropdown>
              <NavItem
                className="dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Guides
              </NavItem>
              <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                <DropdownItem
                  className="dropdown-item nav-item"
                  href="/binance"
                >
                  Trading Cryptocurreny on Binance
                </DropdownItem>
                <DropdownItem className="dropdown-item nav-item" href="/gemini">
                  Trading Fiat to Crypto on Gemini
                </DropdownItem>
              </div>
            </NavDropdown>
          </ul>
        </div>
      </div>
    </NavMain>
  </header>
)

export default Header
