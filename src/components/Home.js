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
      <div>
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
            Bite-Crypto. Providing bite sized cryptocurrency info.
          </h1>
        </div>
      </div>
    )
  }
}

export default Home
