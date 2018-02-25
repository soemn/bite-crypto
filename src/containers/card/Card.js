import React from "react"
import styled from "styled-components"

const CardWrapper = styled.div`
  padding: 5px;
  width: 100%;
`

const CardContent = styled.div`
  border-radius: 6px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

  :hover {
    background: #e8ebec;
    box-shadow: 0px 1px 2px rgba(35, 87, 129, 0.5);
  }
`

const CardImageWrapper = styled.div`
  width: 100%;
  height: 250px;
`

const CardDetailsWrapper = styled.div`
  padding: 10px;
  height: 163px;
`

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const CardTitle = styled.h1`
  font-family: "Cormorant Garamond";
  font-size: 28px;
  font-weight: bold;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const CardText = styled.p`
  margin-top: 4px;
  font-family: "Proza Libre";
  color: "#222529";
  max-width: 100%;
  height: 92px;
  font-size: 16px;
  line-height: 24px;
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

const CardLink = styled.a`
  text-decoration: none !important;
  color: #222529;
  :hover {
    color: #222529;
  }
`

const Card = props => (
  <CardWrapper>
    <CardContent>
      <CardLink href={props.link}>
        <CardImageWrapper>
          <CardImage src={props.image} />
        </CardImageWrapper>
        <CardDetailsWrapper>
          <CardTitle>{props.title}</CardTitle>
          <CardText>{props.description}</CardText>
        </CardDetailsWrapper>
      </CardLink>
    </CardContent>
  </CardWrapper>
)

export default Card
