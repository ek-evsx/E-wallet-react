import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  ApolloLink,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/link-error';

import config from 'config';
import { getParsedTokenData } from 'utils/token';

import App from 'components/App';
import { GlobalStyle } from 'static/styles';

const httpLink = createHttpLink({
  uri: config.apiHost.getGQLApiUrl(),
});

const authLink = setContext((_, { headers }) => {
  const tokenData = getParsedTokenData();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: tokenData ? `Bearer ${tokenData.accessToken}` : "",
    }
  }
});

const errorLink: any = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
      );
  }

  if (networkError) {
      console.log(`[Network error]: ${networkError}`);
  }
});

const client = new ApolloClient({
  link: ApolloLink.from([
    errorLink,
    authLink,
    httpLink,
]),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
