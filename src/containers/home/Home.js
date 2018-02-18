import React, { Component } from "react"
import Particles from "react-particles-js"
import binanceLogo from "../../images/bnb.png"
import binanceGuide from "../../images/binance-tutorial.png"
import geminiLogo from "../../images/gemini.png"
import geminiGuide from "../../images/gemini-tutorial.png"
import tomochain from "../../images/tomochain.png"
import particleConfig from "./particle-config"
import styled from "styled-components"
import backgroundImage from "../../images/background.jpeg"
import logo from "../../images/bite-crypto-logo.png"

const HomeBackground = styled.div``
const HomeHeaderWrapper = styled.div``
const StyledParticles = styled(Particles)`
  width: 100%;
  max-height: 400px;
  min-height: 400px;
  margin-bottom: -400px;
  position: absolute;
  overflow: hidden;
`
const HomeBackgroundContent = styled.div`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 400px;
  min-height: 400px;
`
const HomeBackgroundText = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  color: #f1f5fa;
  justify-content: center;
  align-items: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  font-family: "Cormorant Garamond";
  padding: 15px;
`
const MainContent = styled.div.attrs({
  className: "container"
})`
  padding: 15px;
  background: #ffffff;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`
const ButtonLink = styled.div.attrs({
  className: "btn"
})`
  background-color: #1198ea;
  color: #f1f5fa;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #1f5aa0;
    color: #f1f5fa;
    transition: 0.5s;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
`

const MainContentDescription = styled.div`
  font-family: "Proza Libre";
`

const OtherGuides = styled.h1.attrs({ className: "col" })`
  font-family: "Cormorant Garamond";
  font-weight: bold;
`

const CardTitle = styled.div.attrs({ className: "card-title" })`
  font-family: "Cormorant Garamond";
  font-size: 28px;
  font-weight: bold;
`

const CardText = styled.div.attrs({ className: "card-text" })`
  font-family: "Proza Libre";
  font-size: 16px;
  margin-bottom: 10px;
`

class Home extends Component {
  render() {
    return (
      <div style={{ background: "#f9f9f9" }}>
        <HomeHeaderWrapper>
          <HomeBackgroundContent>
            <StyledParticles params={particleConfig} />
            <HomeBackgroundText>
              <h1 style={{ textAlign: "center" }}>
                Bite Crypto. Providing bite sized cryptocurrency info.
              </h1>
            </HomeBackgroundText>
          </HomeBackgroundContent>
        </HomeHeaderWrapper>
        <MainContent>
          <div
            style={{
              marginTop: "20px"
            }}
            className="row"
          >
            <div className="col">
              <iframe
                src="https://www.youtube.com/embed/r-iLWMTc354"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Experty"
                style={{
                  height: "378px",
                  width: "100%",
                  maxWidth: "672px",
                  minWidth: "290px",
                  borderRadius: "5px",
                  boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
                  marginBottom: "8px"
                }}
              />
            </div>
            <div
              style={{
                width: "100%"
              }}
              className="col"
            >
              <h3
                style={{
                  backgroundColor: "#c5dff8",
                  borderRadius: "5px",
                  textAlign: "center",
                  padding: "5px",
                  boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
                  fontFamily: "Cormorant Garamond",
                  fontWeight: "1000"
                }}
              >
                Experty Review
              </h3>
              <MainContentDescription>
                Experty is a protocol that brings the “expert network” business
                onto the blockchain. It aims to connect experienced
                professionals to users for consulting purposes.
                <br />
                <br />
                Experty plans to integrate their business into available social
                media platform; knowledge providers will be able to share their
                Experty link directly on their social or professional media such
                as LinkedIn, email signature, or Twitter profile.
                <br />
                <br />
                Payments will also be made through a smart contract that
                directly links the knowledge provider with the knowledge seeker,
                so payment between the two parties will be near instant.
              </MainContentDescription>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <a href="/experty">
                  <ButtonLink>Read More</ButtonLink>
                </a>
              </div>
            </div>
          </div>
        </MainContent>
        <div
          className="container"
          style={{ paddingTop: "20px", paddingBottom: "60px" }}
        >
          <div className="row">
            <OtherGuides>Latest Reviews / Guides</OtherGuides>
          </div>

          <div
            style={{
              paddingTop: "15px",
              display: "flex",
              justifyContent: "flex-start"
            }}
            className="row"
          >
            {/* Binance exchange */}
            <div
              className="card"
              style={{
                width: "20rem",
                margin: "5px"
              }}
            >
              <a
                href="/binance"
                style={{ textDecoration: "none", color: "#222529" }}
              >
                <div
                  className="card-block"
                  style={{ padding: "20px", textAlign: "center" }}
                >
                  <img
                    src={binanceLogo}
                    style={{
                      width: "100%",
                      maxHeight: "80px",
                      display: "inline-block",
                      marginBottom: "10px"
                    }}
                  />
                  <img
                    src={binanceGuide}
                    style={{
                      width: "100%",
                      display: "inline-block",
                      marginBottom: "10px"
                    }}
                    alt="Binance"
                  />
                  <CardTitle className="card-title">
                    Binance Exchange Guide
                  </CardTitle>
                  <CardText>
                    Learn how to trade Cryptocurrencies pairs on one of the best
                    cryptocurrency exchanges!
                  </CardText>
                  <ButtonLink>View Video</ButtonLink>
                </div>
              </a>
            </div>
            {/* End of Binance Exchange */}

            {/* Gemini exchange */}
            <div
              className="card"
              style={{
                width: "20rem",
                margin: "5px"
              }}
            >
              <a
                href="/gemini"
                style={{ textDecoration: "none", color: "#222529" }}
              >
                <div
                  className="card-block"
                  style={{ padding: "20px", textAlign: "center" }}
                >
                  <img
                    src={geminiLogo}
                    style={{
                      maxHeight: "60px",
                      display: "inline-block",
                      marginBottom: "10px",
                      borderRadius: "5px"
                    }}
                  />
                  <img
                    src={geminiGuide}
                    style={{
                      width: "100%",
                      display: "inline-block",
                      marginBottom: "10px"
                    }}
                    alt="Binance"
                  />
                  <CardTitle className="card-title">
                    Gemini Exchange Guide
                  </CardTitle>
                  <CardText>
                    Gemini provides fiat to cryptocurreny pairings. Learn how to
                    use Gemini Exchange in this video tutorial.
                  </CardText>
                  <ButtonLink>View Video</ButtonLink>
                </div>
              </a>
            </div>
            {/* End of gemini */}

            {/* TomoChain exchange */}
            <div
              className="card"
              style={{
                width: "20rem",
                margin: "5px"
              }}
            >
              <a
                href="/tomochain"
                style={{ textDecoration: "none", color: "#222529" }}
              >
                <div
                  className="card-block"
                  style={{ padding: "20px", textAlign: "center" }}
                >
                  <img
                    src={tomochain}
                    style={{
                      width: "100%",
                      display: "inline-block",
                      marginBottom: "10px"
                    }}
                    alt="Binance"
                  />
                  <CardTitle className="card-title">
                    TomoChain ICO Review
                  </CardTitle>
                  <CardText>
                    Tomo Coin is a digital currency that will be used in the
                    Tomo ecosystem which consists of 3 parts: the TomoChain, the
                    TomoWallet, and apps built on top of TomoChain. Check out
                    our review regarding their upcoming ICO.
                  </CardText>
                  <ButtonLink>View Video</ButtonLink>
                </div>
              </a>
            </div>
            {/* End of tomochain */}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
