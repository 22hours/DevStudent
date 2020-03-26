import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    // uri : "https://countries.trevorblades.com/"
    uri : "http://15.164.164.141:8080/graphql"
})

export default client;