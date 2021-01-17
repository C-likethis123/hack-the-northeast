import React from 'react'

import { HashRouter, Route, Switch } from 'react-router-dom';
import { Home, Login, DashboardIntern, DashboardCompany, SignUp, ProfileCompany, ProfileIntern } from "../views"
import { useState } from 'react';
import GuardedRoute from 'react-guarded-route';

export default function Body() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const authenticate = () => setIsAuthenticated(true);

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={SignUp} />
        <Route path="/login" render={props => <Login authenticate={authenticate} />} />
        <Route path="/signup" component={SignUp} />
        <GuardedRoute
          path="/dashboardIntern"
          component={DashboardIntern}
          redirectTo="/login"
          validatorFunction={isAuthenticated}
        />
        <GuardedRoute
          path="/dashboardCompany"
          component={DashboardCompany}
          redirectTo="/login"
          validatorFunction={isAuthenticated}
        />
        <GuardedRoute
          path="/company"
          component={DashboardCompany}
          redirectTo="/login"
          validatorFunction={isAuthenticated}
        />
        <GuardedRoute
          path="/profileIntern"
          component={ProfileIntern}
          redirectTo="/login"
          validatorFunction={isAuthenticated}
        />
        <GuardedRoute
          path="/profileCompany"
          component={ProfileCompany}
          redirectTo="/login"
          validatorFunction={isAuthenticated}
        />
      </Switch>
    </HashRouter>
  )
}

