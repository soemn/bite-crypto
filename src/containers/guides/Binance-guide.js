import React from "react"

const BinanceGuide = () => (
  <div className="container">
    <div style={{ paddingTop: "15px" }}>
      <h1>Binance Exchange Guide</h1>
    </div>
    <div className="row" style={{ paddingTop: "15px" }}>
      <div className="col-7">
        <iframe
          src="https://www.youtube.com/embed/u8-4ls64EaQ"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Binance"
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
        className="col-5"
      >
        <h3>Binance Guide</h3>
        <p>
          Binance is currently the second largest Crypto-Crypto exchange by
          trading volume. It currently boasts over 200 trading pairs , which
          makes it ideal for those looking to trade a large variety of
          cryptocurrencies. It also charges a relatively low trading fee of 0.1%
          per trade and provides discounts when paying fees using its Binance
          Coin(BNB). This video provides a step-by-step guide for setting up
          your Binance account!
        </p>
        <h3>Content:</h3>
        <ul>
          <li>Registering an account</li>
          <li>Level 2 Verification</li>
          <li>Deposit and Withdrawal</li>
          <li>Trading on Binance Exchange</li>
        </ul>
      </div>
    </div>
  </div>
)

export default BinanceGuide
