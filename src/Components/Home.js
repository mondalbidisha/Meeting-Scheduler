import React from 'react';
import AppHeader from './AppHeader';
import Container from './Container'; 
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({  // creates Apollo client Instance with URI to fetch data from
  uri: "https://smart-meeting.herokuapp.com",
  fetchOptions: () => {
    return {
      headers: { token: '2342314235asdaadf' }
    }
  },
  onError: ({ networkError, graphQLErrors }) => { 
    // log errors to console based on whether the error was caused due to network failure or graphQL server failure
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  }
});

const Home = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <AppHeader title='SMART MEETING SCHEDULER'/> 
        <Container />
      </div>
    </ApolloProvider>
  );
}

export default Home;