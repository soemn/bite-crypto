import React from "react"
import logo from "../../images/bite-crypto-logo.png"
import Particles from "react-particles-js"
import particleConfig from "./particle-config"
import backgroundImage from "../../images/background.jpeg"
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
  padding: 0;

  @media (max-width: 991px) {
    padding: 8px 15px;
  }
`

const CollapseButton = styled.button.attrs({
  className: "navbar-toggler"
})``

const StyledParticles = styled(Particles)`
  width: 100%;
  max-height: 100px;
  min-height: 100px;
  margin-bottom: -100px;
  position: absolute;
  overflow: hidden;
`
const HeaderTopWrapper = styled.div`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 100px;
  min-height: 100px;
`
const HeaderTopContent = styled.div.attrs({
  className: "container"
})`
  display: flex;
  width: 100%;
  height: 100%;
  color: #f1f5fa;
  justify-content: flex-start;
  align-items: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  font-family: "Cormorant Garamond";
  padding: 15px;
`

const HeaderTopText = styled.a`
  text-decoration: none !important;
  color: #f1f1f1;
  z-index: 2;

  :hover {
    color: #f1f1f1;
  }
`

const HeaderLogoImage = styled.a`
  margin-right: 10px;
  z-index: 2;
`

const Header = () => (
  <header>
    <HeaderTopWrapper>
      <StyledParticles params={particleConfig} />
      <HeaderTopContent>
        <HeaderLogoImage href="/">
          <img src={logo} style={{ height: "50px" }} alt="Bite Crypto" />
        </HeaderLogoImage>
        <HeaderTopText href="/">
          <h1 style={{ margin: "0" }}>Bitecrypto</h1>
        </HeaderTopText>
      </HeaderTopContent>
    </HeaderTopWrapper>

    <NavMain>
      <div className="container">
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
