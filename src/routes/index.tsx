import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { ROUTES } from 'utils/constants';

import LoginPage from 'components/pages/Login';
import Dashboard from 'components/pages/Dashboard';
import PrivateRoute from 'components/PrivateRoute';

const publicRoutes = [
  {
    path: ROUTES.login,
    component: LoginPage,
  },
];

const privateRoutes = [
  {
    path: ROUTES.dashboard,
    component: Dashboard,
  },
];

export const AppRouter = () => {
  const publicRoutesComponents = publicRoutes.map(route => <Route {...route} />);
  const privateRoutesComponents = privateRoutes.map(route => <PrivateRoute {...route} />);

  return (
    <Router>
        <Switch>
          {publicRoutesComponents}
          {privateRoutesComponents}
        </Switch>
    </Router>
  );
}