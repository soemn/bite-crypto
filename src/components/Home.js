import React, { Component } from "react"
import Particles from "react-particles-js"

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
        <Particles
          params={{
            particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                  value_area: 1000
                }
              },
              color: {
                value: "#c5dff8"
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000"
                },
                polygon: {
                  nb_sides: 9
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100
                }
              },
              opacity: {
                value: 0.5,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.1,
                width: 1
              },
              move: {
                enable: true,
                speed: 1.5,
                direction: "top-right",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble"
                },
                onclick: {
                  enable: false,
                  mode: "push"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 100,
                  size: 5,
                  duration: 2,
                  opacity: 0.8,
                  speed: 3
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }
            },
            retina_detect: true
          }}
          style={{
            width: "100%",
            maxHeight: "500px",
            minHeight: "500px",
            background: "#0a5785",
            marginBottom: "-500px",
            zIndex: "1",
            position: "absolute"
          }}
        />
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
              alignSelf: "flex-start",
              display: "flex",
              justifyContent: "flex-end",
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
          {/* <h1>ICO Reviews</h1> */}

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
              flexWarp: "warp"
            }}
          >
            <div>
              <iframe
                src="https://www.youtube.com/embed/r-iLWMTc354"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Experty"
                style={{
                  height: "378px",
                  width: "672px"
                }}
              />
            </div>
            <div
              style={{
                width: "100%",
                paddingLeft: "25px"
              }}
            >
              <h2>Experty Review</h2>
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
            </div>
          </div>
        </div>
        <div className="container" style={{ paddingTop: "20px" }}>
          <h1>Upcoming Reviews / Guides</h1>
        </div>
        <div>Footer</div>
      </div>
    )
  }
}

export default Home
