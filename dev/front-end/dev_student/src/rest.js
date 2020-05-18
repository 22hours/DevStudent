import axios from "axios";
import PublicIpGetter from "module/PublicIpGetter/PublicIpGetter";

// USER API SERVER

const DOMAIN = "https://devstu.fdsafdsa.shop/";

const CREATE_USER = "user/create";

const UPDATE_AUTH_STATE = "user/update/AuthState";

const LOGIN_TO_SERVER = "user/login";

const CREATE_NICKNAME = "user/create/nickname";

const CHECK_DUPLICATED_EMAIL = "user/check/email";

// QUERY

const FIND_HOME_KANBAN = "main/question/find/homekanban";

const FIND_ALL_QUESTIONS = "main/question/find/all";

const FIND_QUESTIONS_BY_TAGS = "main/question/find/tags";

const FIND_QUESTIONS_BY_OPTIONS = "main/question/find/all/option";

const COUNT_TAGS = "main/count/all/tags";

// MUTATIONS

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

export {
    POST,
    DOMAIN,
    CREATE_USER,
    UPDATE_AUTH_STATE,
    LOGIN_TO_SERVER,
    CREATE_NICKNAME,
    CHECK_DUPLICATED_EMAIL,
    FIND_HOME_KANBAN,
    FIND_ALL_QUESTIONS,
    FIND_QUESTIONS_BY_TAGS,
    FIND_QUESTIONS_BY_OPTIONS,
    COUNT_TAGS,
};
