import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

// Constants
import {ROUTES} from 'lib/helpers/constants';

// Pages
import Home from 'pages/Home';
import UserSignature from 'pages/UserSignature';


const publicRoutes = [
  {Component: Home, path: ROUTES.home},
  {Component: UserSignature, path: ROUTES.userSignature},
];

const Routes = () => (
  <Router>
    <Switch>
      {publicRoutes.map(({Component, path}) => (
        <Route exact key={path} path={path}>
          <Component/>
        </Route>
      ))}
      <Redirect to={"/"}/>
    </Switch>
  </Router>
);

export default Routes;
