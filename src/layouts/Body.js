import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Test } from "../views"

export default function Body() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/test" component={Test} />
      </Switch>
    </BrowserRouter>
  )
}

