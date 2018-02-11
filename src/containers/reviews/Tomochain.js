import React from "react"
import ReactMarkdown from "react-markdown"

const Tomochain = () => (
  <div className="container">
    <div style={{ paddingTop: "20px" }}>
      <h1>TomoChain Token Review</h1>
    </div>
    <div className="row" style={{ paddingTop: "15px" }}>
      <div className="col">
        <iframe
          src="https://www.youtube.com/embed/r-iLWMTc354"
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
    </div>

    <ReactMarkdown
      source={`
### TomoChain

Hi guys, welcome to another episode of Bite Crypto, where we provide Bite sized crypto news to satisfy your daily crypto needs. If you have been liking our videos so far, remember to spam the like button and click to subscribe to get updates on our latest videos.

For today’s video, we will be conducting a review for Tomo Coin ICO. Tomo Coin is basically a digital currency that will be used in the Tomo ecosystem which consists of 3 parts : the Tomochain, the Tomowallet, and apps built on top of Tomo Chain. The Tomochain testnet, demo Tomo Wallet and beta Tomoapp (a decentralized knowledge sharing platform) are all already available and you can check them out using the links in the description box below.

The Tomo ecosystem is built on Tomochain, which is the underlying blockchain with the potential to process billions of transactions per day with near zero fees and almost instantaneous transaction confirmation. Tomochain aims to solve the scalability problems currently faced by the Ethereum network by reducing the confirmation time from 15 seconds average for Ethereum to 2 seconds which is 7 times faster than Ethereum by utilising the proof of authority (POA) consensus method. Tomocoin will be the digital currency of this blockchain and used as block rewards for nodes.

Tomochain will have the same features as Ethereum which allows for supporting smart contracts and also the allowance for token issuance. Furthermore, it is fully compatible with Ethereum smart contracts which basically means that existing projects on Ethereum can easily migrate onto TomoChain.

### Initial Coin Offering (ICO)

Tomo Chain ICO will have a total hard cap of USD 8.5 million and each Tomocoin will be worth 0.25 USD at launch. The ICO date is slated for March 2018 with a presale cap of USD 7.5 million and crowd sale cap of USD 1 million. Take note that citizens in the US, Canada, UK, Singapore and Hong Kong are not allowed to take part in this ICO.

ICO Website: https://www.tomocoin.io/

### Short Term

Bite Crypto believes that this project is a good short term investment as the Ethereum network currently faces congestion issues on a regular basis (especially during ICO periods). The Tomo ecosystem should prove to be a good solution that many projects and users will consider moving into. With Long Vuong, co-founder of New economic movement, currently one of the top 10 cryptocurrencies in the world at the helm of the experienced Tomo Chain team, the backing of notable advisors and proof of a working product, all indicators point that the project will be able to deliver as per their schedule which is the official release of the tomoapp in q3 2018 and the official release of tomochain in q4 2018. Also, considering the scope of the project, and the low hard cap for ICO, we believe Tomochain definitely will get off to a good start.

### Long Term

As for the long term outlook, Bite Crypto is neutral on Tomo Chain. There is little detail available regarding the future direction of Tomocoin as their roadmap is not very extensive after 2018. Furthermore, to ensure its long term success, Tomochain needs to have its own unique and differentiating characteristics from the Ethereum network, in order to maintain its userbase.

---------------

This is the end of today’s video on our review on Tomo Coin ICO. If you have the information useful and would like more similar videos, remember to spam the like button and subscribe. From the entire Bite Crypto team, here’s wishing everyone a happy lunar new year.
`}
    />
  </div>
)

export default Tomochain
