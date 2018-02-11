import React from "react"
import styled from "styled-components"

const Container = styled.div.attrs({
  className: "container"
})``

const GeminiGuide = () => (
  <Container>
    <div style={{ paddingTop: "15px" }}>
      <h1>Gemini Exchange Guide</h1>
    </div>
    <div className="row" style={{ paddingTop: "15px" }}>
      <div className="col">
        <iframe
          src="https://www.youtube.com/embed/n_i_pjoHmwo"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Gemini"
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
        <h3>Gemini Guide</h3>
        <p>
          Gemini is a wellknown licensed digital currency exchange, regulated by
          the New York State Department of Financial Services (NYSDFS). Dealing
          with both individual and institutional clients, Gemini aims to be the
          bridge between fiat currency and cryptocurreny, offering USD trading
          pairs with both Bitcoin (BTC) and Ethereum (ETH) with low fees of
          0.25% per trade. This video provides a step-by-step guide for setting
          up your Gemini account!
        </p>
        <h3>Content:</h3>
        <ul>
          <li>Registering an account</li>
          <li>Adding a bank account</li>
          <li>Deposit and Withdrawal</li>
          <li>Trading on Gemini</li>
        </ul>
      </div>
    </div>
  </Container>
)

export default GeminiGuide
