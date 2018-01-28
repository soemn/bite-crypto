import React, { Component } from "react"
import Particles from "react-particles-js"
import binanceLogo from "../../images/bnb.png"
import particleConfig from "./particle-config"
import styled from "styled-components"

const HomeBackground = styled.div``
const StyledParticles = styled(Particles)`
  width: 100%;
  max-height: 500px;
  min-height: 500px;
  background: #0a5785;
  margin-bottom: -500px;
  z-index: 1;
  position: absolute;
`

class Home extends Component {
  componentDidMount() {
    ;(function() {
      var po = document.createElement("script")
      po.type = "text/javascript"
      po.async = true
      po.src = "https://hitbtc.com/get_widget?pair=btcusd"
      var s = document.getElementsByTagName("script")[0]
      s.parentNode.insertBefore(po, s)
      s.parentNode.insertBefore(po, s)
    })()
  }

  render() {
    return (
      <div style={{ background: "#f1f5fa" }}>
        <StyledParticles params={particleConfig} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            maxHeight: "500px",
            minHeight: "500px"
          }}
        >
          <div
            style={{
              alignSelf: "flex-end",
              display: "flex",
              justifyContent: "center",
              width: "100%"
            }}
          >
            <div id="hitbtc-ticker" className="hit-medium" />
          </div>
          <h1
            className="container"
            style={{
              position: "absolute",
              zIndex: "2",
              color: "#f1f5fa",
              textAlign: "center"
            }}
          >
            Bite Crypto. Providing bite sized cryptocurrency info.
          </h1>
        </div>
        <div
          className="container"
          style={{
            marginTop: "20px"
          }}
        >
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
              flexWarp: "warp"
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
                  minWidth: "320px"
                }}
              />
            </div>
            <div
              style={{
                width: "100%",
                paddingLeft: "25px"
              }}
              className="col"
            >
              <h2
                style={{
                  backgroundColor: "#c5dff8",
                  borderRadius: "6px",
                  textAlign: "center",
                  padding: "3px"
                }}
              >
                Experty Review
              </h2>
              <p>
                Experty is a protocol that brings the “expert network” business
                onto the blockchain. It aims to connect experienced
                professionals to users for consulting purposes.
              </p>
              <p>
                Experty plans to integrate their business into available social
                media platform; knowledge providers will be able to share their
                Experty link directly on their social or professional media such
                as LinkedIn, email signature, or Twitter profile. Payments will
                also be made through a smart contract that directly links the
                knowledge provider with the knowledge seeker, so payment between
                the two parties will be near instant.
              </p>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <a
                  href="/experty"
                  className="btn"
                  style={{ backgroundColor: "#1198ea", color: "#f1f5fa" }}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container"
          style={{ paddingTop: "20px", paddingBottom: "60px" }}
        >
          <h1>Upcoming Reviews / Guides</h1>
          <div style={{ paddingTop: "15px" }}>
            <div
              className="card"
              style={{
                width: "20rem"
              }}
            >
              <div
                className="card-block"
                style={{ padding: "20px", textAlign: "center" }}
              >
                <img
                  src={binanceLogo}
                  style={{
                    height: "50px",
                    display: "inline-block",
                    marginBottom: "10px"
                  }}
                  alt="Binance"
                />
                <h4 className="card-title">Binance Exchange Guide</h4>
                <p className="card-text">
                  Learn how to trade on one of the best cryptocurrency
                  exchanges!
                </p>
                <button
                  href="#"
                  className="btn"
                  style={{ backgroundColor: "#1198ea", color: "#f1f5fa" }}
                >
                  Coming Soon!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
