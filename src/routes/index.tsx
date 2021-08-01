import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { ROUTES } from 'utils/constants';

import LoginPage from 'components/pages/Login';
import Dashboard from 'components/pages/Dashboard';
import NotFoundPage from 'components/pages/NotFound';
import PrivateRoute from 'components/PrivateRoute';
import ResetPassword from 'components/pages/ResetPassword';
import SignUp from 'components/pages/SignUp';

const publicRoutes = [
  {
    path: ROUTES.login,
    component: LoginPage,
  },
  {
    path: ROUTES.resetPassword,
    component: ResetPassword,
  },
  {
    path: ROUTES.signUp,
    component: SignUp,
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
          <Route component={NotFoundPage} />
        </Switch>
    </Router>
  );
}