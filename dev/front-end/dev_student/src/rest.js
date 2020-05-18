import axios from "axios";
import PublicIpGetter from "module/PublicIpGetter/PublicIpGetter";

const DOMAIN = "https://devstu.fdsafdsa.shop/user/";

const CREATE_USER = "create";

const UPDATE_AUTH_STATE = "update/AuthState";

const LOGIN_TO_SERVER = "login";

const CREATE_NICKNAME = "create/nickname";

const CHECK_DUPLICATED_EMAIL = "check/email";

const getIp = () => {
    return PublicIpGetter();
};
let config = {
    headers: {
        ip: PublicIpGetter(),
    },
};

const POST = (method, url, data) => {
    const ip = localStorage.getItem("ip");
    return axios({
        method,
        url: DOMAIN + url,
        data,
        headers: { ip: ip },
    })
        .then((result) => result.data)
        .catch((result) => {
            console.log(result);
            return Error(result);
        });
};

export { POST, DOMAIN, CREATE_USER, UPDATE_AUTH_STATE, LOGIN_TO_SERVER, CREATE_NICKNAME, CHECK_DUPLICATED_EMAIL };
