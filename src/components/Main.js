import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Experty from "./reviews/Experty"

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/experty" component={Experty} />
    </Switch>
  </main>
)

export default Main
