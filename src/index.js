import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
} from 'react-apollo';

import App from './App';
import './index.css';

// Initialize Apollo Client, read more at:
// http://dev.apollodata.com/react/initialization.html
const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://graphql.communitygraph.org/graphql/',
  }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
