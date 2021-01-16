import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Test, Dashboard } from "../views"

export default function Body() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/test" component={Test} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}

