import React from "react";

import { render } from "react-dom";
import {
  ApolloProvider,
  useQuery,
  useMutation,
  gql
} from "@apollo/client";
import App from './App';
import client from './graphql/client'

render(
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>, 
  document.getElementById('root')
);
