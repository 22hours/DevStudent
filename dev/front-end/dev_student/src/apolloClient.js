import ApolloClient from "apollo-boost";
import PublicIpGetter from "module/PublicIpGetter/PublicIpGetter";
const client1 = new ApolloClient({
    // uri : "https://countries.trevorblades.com/"
    uri: "http://15.164.164.141:8080/graphql",
});
const client = new ApolloClient({
    request: (operation) => {
        const token = localStorage.getItem("token");
        var ip = localStorage.getItem("ip");
        if (ip) {
        } else {
            PublicIpGetter();
            ip = localStorage.getItem("ip");
        }
        operation.setContext({
            headers: {
                Authorization: `${token}`,
                EncodingType: "utf-8",
                ip: ip,
            },
        });
    },
    uri: "http://15.164.164.141:8080/graphql",
});
export default client;
