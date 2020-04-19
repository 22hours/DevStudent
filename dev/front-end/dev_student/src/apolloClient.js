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
    onError: (error) => {
        const nickname = localStorage.getItem("nickname");
        if (nickname) {
            localStorage.clear();
            alert("다시 로그인 하세요");
        } else {
            alert("서버에 장애가 발생하였습니다 잠시후 다시 시도해 주세요");
        }
        window.location.replace("/");
    },
});
export default client;
