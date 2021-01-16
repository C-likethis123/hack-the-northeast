import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Login, Dashboard } from "../views"
import { useState } from 'react';
import GuardedRoute from 'react-guarded-route';

export default function Body() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const authenticate = () => setIsAuthenticated(true);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" render={props => <Login authenticate={authenticate} />} />
        <GuardedRoute
          path="/dashboard"
          component={Dashboard}
          redirectTo="/login"
          validatorFunction={isAuthenticated}
        />
      </Switch>
    </BrowserRouter>
  )
}

