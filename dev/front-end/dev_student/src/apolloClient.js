import ApolloClient from "apollo-boost";

const client1 = new ApolloClient({
    // uri : "https://countries.trevorblades.com/"
    uri: "http://15.164.164.141:8080/graphql",
});
const client = new ApolloClient({
    request: (operation) => {
        const token = localStorage.getItem("token");
        operation.setContext({
            headers: {
                Authorization: `${token}`,
            },
        });
    },
    uri: "http://15.164.164.141:8080/graphql",
});
export default client;
