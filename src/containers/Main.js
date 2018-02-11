import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./home/Home"
import About from "./About"
import Experty from "./reviews/Experty"
import TomoChain from "./reviews/Tomochain"
import BinanceGuide from "./guides/Binance-guide"
import GeminiGuide from "./guides/Gemini-guide"
import styled from "styled-components"

const MainWrapper = styled.main`
  display: flex;
  min-height: 82vh;
  flex-direction: column;
`

const Main = () => (
  <MainWrapper>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/experty" component={Experty} />
      <Route path="/tomochain" component={TomoChain} />
      <Route path="/binance" component={BinanceGuide} />
      <Route path="/gemini" component={GeminiGuide} />
    </Switch>
  </MainWrapper>
)

export default Main
