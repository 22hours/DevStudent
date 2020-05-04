import ApolloClient from "apollo-boost";

import PublicIpGetter from "module/PublicIpGetter/PublicIpGetter";
const client1 = new ApolloClient({
    // uri : "https://countries.trevorblades.com/"
    uri: "http://15.164.164.141:8080/graphql",
});
const localData = JSON.parse(localStorage.getItem("user"));
const token = localData?.accessToken;

const getMyHeader = () => {
    PublicIpGetter();
    const ip = localStorage.getItem("ip");
    if (token) {
        console.log("token true");
        if (ip) {
            return {
                Authorization: `${token}`,
                EncodingType: "utf-8",
                ip: ip,
            };
        }
    } else {
        console.log("token false");
        return {
            EncodingType: "utf-8",
            ip: ip,
        };
    }
};

const client = new ApolloClient({
    request: (operation) => {
        var ip = localStorage.getItem("ip");
        if (ip) {
        } else {
            PublicIpGetter();
            ip = localStorage.getItem("ip");
        }
        operation.setContext({
            headers: getMyHeader(),
        });
    },
    // uri: "http://15.164.164.141:8080/graphql",
    uri: "",
    onError: (error) => {
        // const nickname = localStorage.getItem("nickname");
        // if (nickname) {
        //     localStorage.clear();
        //     alert("다시 로그인 하세요");
        //     window.location.replace("/");
        // } else {
        //     alert("서버에 장애가 발생하였습니다 잠시후 다시 시도해 주세요");
        //     console.log(error);
        //     console.log(error.response.errors);
        // }
    },
});
export default client;
