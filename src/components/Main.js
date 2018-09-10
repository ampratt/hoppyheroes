import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Play from './Play'

// The Main component renders one of the provided
// Routes (provided that one matches). The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/play' component={Play} />
      </Switch>
    </HashRouter>
  </main>
)

export default Main

      // <Route path='/settings' component={Settings} />