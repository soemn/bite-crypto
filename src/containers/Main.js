import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./home/Home"
import About from "./About"
import Experty from "./reviews/Experty"

const Main = () => (
  <main
    style={{
      display: "flex",
      minHeight: "82vh",
      flexDirection: "column"
    }}
  >
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/experty" component={Experty} />
    </Switch>
  </main>
)

export default Main
