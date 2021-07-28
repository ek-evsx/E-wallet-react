import React from 'react';
import { useHistory  } from 'react-router';
import { ApolloConsumer, ApolloClient } from '@apollo/client';

import { ROUTES } from 'utils/constants';
import { clearTokenData } from 'utils/token';

import { Button } from './styles';

const LogoutButton = () => {
  const history = useHistory();

  const onClick = (client: ApolloClient<object>) => async () => {
    try {
      await client?.resetStore();

      return history.push(ROUTES.login);
    } catch (e) {
      console.log(e);
    } finally {
      clearTokenData();
    }
  };

  return (
    <ApolloConsumer>
      {
        client => <Button onClick={onClick(client)}>Log out</Button>
      }
    </ApolloConsumer>
    
  );
};

export default LogoutButton;
