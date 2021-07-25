import React, { useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { History, Location } from 'history';

import { isTokenExpired } from 'utils/token';
import { ROUTES } from 'utils/constants';

interface IProps {
    //@ts-ignore
  component: React.FC<Props>;
  exact?: boolean;
  path: string;
};

interface IRouteProps {
  history: History;
  location: Location;
  match: IMatch;
};

interface IMatch {
  params: {
    [key: string]: string | number;
  };
  isExact: boolean;
  path: string;
  url: string;
}

const PrivateRoute = (props: IProps) => {
  const { path, component, ...routeProps } = props;
  const RouteComponent = component as React.ElementType;
  const history = useHistory();

  useEffect(() => {
    if (isTokenExpired()) {
      return history.push(ROUTES.login);
    }
  }, [history]);

  //@ts-ignore
  return <Route 
    path={props.path} 
    {...routeProps}
      //@ts-ignore
    render={(props: IRouteProps) => (
      <RouteComponent {...props} />
    )}  
  />;
};

export default PrivateRoute;
