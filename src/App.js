import React from 'react'
import Header from './Header'
import GlobalStyles from './GlobalStyles'
import Footer from './Footer'
import Celebration from './Celebration'
import YourDay from './YourDay'
import { Switch, Route } from 'react-router-dom'
import GetThePartyStarted from './GetThePartyStarted'

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/">
          <GetThePartyStarted />
        </Route>
        <Route exact path="/lets-celebrate">
          <Celebration />
        </Route>
        <Route exact path="/lets-celebrate/your-day">
          <YourDay />
        </Route>
      </Switch>
      <Footer />
    </>
  )
}

export default App
