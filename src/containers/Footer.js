import React from "react"

const Footer = () => (
  <div
    style={{
      background: "#0a5785",
      height: "100%"
    }}
  >
    <div
      className="container"
      style={{
        color: "#f1f5fa",
        paddingTop: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <a href="/" style={{ textDecoration: "none", color: "#f1f5fa" }}>
        <p>© BiteCrypto 2018</p>
      </a>
    </div>
  </div>
)

export default Footer
