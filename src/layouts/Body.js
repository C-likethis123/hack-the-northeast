import React from 'react'

import { HashRouter, Route, Switch } from 'react-router-dom';
import { Home, Login, Dashboard, SignUp, Profile } from "../views"
import { useState } from 'react';
import GuardedRoute from 'react-guarded-route';

export default function Body() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const authenticate = () => setIsAuthenticated(true);

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" render={props => <Login authenticate={authenticate} />} />
        <Route path="/signup" component={SignUp} />
        <GuardedRoute
          path="/dashboard"
          component={Dashboard}
          redirectTo="/login"
          validatorFunction={isAuthenticated}
        />
        <GuardedRoute
          path="/profile"
          component={Profile}
          redirectTo="/login"
          validatorFunction={isAuthenticated}
        />
      </Switch>
    </HashRouter>
  )
}

