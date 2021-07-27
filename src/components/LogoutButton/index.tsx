import React from 'react';
import { ApolloConsumer, ApolloClient } from '@apollo/client';

import { clearTokenData } from 'utils/token';

import { Button } from './styles';


const LogoutButton = () => {
  const onClick = (client: ApolloClient<object>) => async () => {
    try {
      await client?.resetStore()
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
