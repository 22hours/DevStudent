import axios from "axios";

const DOMAIN = "https://devstu.fdsafdsa.shop/user/";

const CREATE_USER = "create";

const UPDATE_AUTH_STATE = "update/AuthState";

const LOGIN_TO_SERVER = "login";

const CREATE_NICKNAME = "create/nickname";

const CHECK_DUPLICATED_EMAIL = "check/email";

const request = (method, url, data) => {
    return axios({
        method,
        url: DOMAIN + url,
        data,
    })
        .then((result) => result.data)
        .catch((result) => {
            console.log(result);
            return Error(result);
        });
};

export { request, DOMAIN, CREATE_USER, UPDATE_AUTH_STATE, LOGIN_TO_SERVER, CREATE_NICKNAME, CHECK_DUPLICATED_EMAIL };
