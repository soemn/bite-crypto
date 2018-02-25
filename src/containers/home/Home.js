import React, { Component } from "react"
import Particles from "react-particles-js"

import particleConfig from "./particle-config"
import styled from "styled-components"
import backgroundImage from "../../images/background.jpeg"
import logo from "../../images/bite-crypto-logo.png"
import Card from "../card/Card"
import cardData from "./cardData"

// const HomeBackground = styled.div``
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

const CardItemsList = styled.div`
  padding-top: 15px;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const CardItem = styled.div`
  display: flex;
  min-width: 33%;
  max-width: 33%;

  @media (max-width: 1023px) {
    min-width: 50%;
    max-width: 50%;
  }

  @media (max-width: 767px) {
    min-width: 100%;
    max-width: 100%;
  }
`

class Home extends Component {
  componentDidMount() {
    console.log(this.createCardItems(cardData))
  }

  createCardItem = (cardItem, index) => (
    <CardItem>
      <Card
        title={cardItem.title}
        link={cardItem.link}
        description={cardItem.description}
        image={cardItem.image}
        key={index}
      />
    </CardItem>
  )

  createCardItems = cardData => {
    const cardDataCopy = [...cardData]
    const cardItemsArr = cardDataCopy.map((cardItem, index) =>
      this.createCardItem(cardItem, index)
    )
    return cardItemsArr
  }

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
          <div>
            <OtherGuides>Latest Reviews / Guides</OtherGuides>
          </div>

          <CardItemsList>{this.createCardItems(cardData)}</CardItemsList>
        </div>
      </div>
    )
  }
}

export default Home
