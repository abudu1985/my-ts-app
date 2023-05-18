import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";
import App from "./App";
import reportWebVitals from './components/Routes/reportWebVitals';
import { AuthProvider } from './components/Routes/context/JWTContext';

import "./index.css";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          characters: relayStylePagination(),
        },
      },
    },
  }),
});

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
