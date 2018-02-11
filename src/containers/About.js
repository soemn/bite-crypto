import React from "react"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"

const Content = styled.div.attrs({
  className: "container"
})`
  margin-top: 20px;
`

const About = () => (
  <Content>
    <ReactMarkdown
      source={`
# About Bitecrypto

**Bitecrypto** is an independent research group focused on distributed ledger technologies and cryptocurrencies. Although cryptocurrencies are gaining more media attention and attracting new investors with each passing day, there is a sizeable portion of the general public that are not well-versed in this new asset class. A huge time investment is needed in order to read up on the terminologies and technologies behind cryptocurrencies, as well as to staying up-to-date with the latest market situation. All these can be rather daunting to a newcomer, or those who lack the necessary time commitment.

Bitecrypto aims to address this by providing information in an easily accessible and understood manner. Our videos are short in length, breaking down oft-lengthy details into concise points, making it easily understandable for newbies, at the same time not taking up too much of the viewer's time. Our written articles provide a lengthier and more comprehensive analysis, suitable for those who are looking for more in-depth specifics.

Our goal is to provide unbiased content to our audiences, and are not sponsored for any of our content. Any opinion expressed in our content is purely personal and is not financial advice. Cryptocurrencies are prone to huge fluctuations and audiences are advised to do their own research and due diligence before investing.`}
    />
  </Content>
)

export default About
