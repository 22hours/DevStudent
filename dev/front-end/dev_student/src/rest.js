import axios from "axios";
import PublicIpGetter from "module/PublicIpGetter/PublicIpGetter";

// USER API SERVER

export const DOMAIN = "https://devstu.fdsafdsa.shop/";

export const CREATE_USER = "user/create";

export const UPDATE_AUTH_STATE = "user/update/AuthState";

export const LOGIN_TO_SERVER = "user/login";

export const CREATE_NICKNAME = "user/create/nickname";

export const CHECK_DUPLICATED_EMAIL = "user/check/email";

///////////////////////////////
// QUERY                    //

export const FIND_HOME_KANBAN = "main/question/find/homekanban";

export const FIND_ALL_QUESTIONS = "main/question/find/all";

export const FIND_QUESTIONS_BY_TAGS = "main/question/find/tags";

export const FIND_QUESTIONS_BY_OPTIONS = "main/question/find/all/option";

export const COUNT_TAGS = "main/count/all/tags";

// mypage + alarms
export const FIND_USER_BY_NICKNAME = "main/userInfo/find";

export const FIND_ALL_ALARMS = "main/alarm/find/all";

export const COUNT_UNREAD_ALARMS = "main/count/unread/alarms";

export const FIND_QUESTION_BY_ID = "main/question/find/id";

///////////////////////////////
// MUTATIONS                //

export const CREATE_LIKE = "main/question/create/like";

export const CREATE_ANSWER = "main/answer/create";

export const CREATE_COMMENT = "main/comment/create";

export const UPDATE_ADOPTED_ANSWER_ID = "main/question/update/adopt";

export const UPDATE_USER_INFO = "main/userInfo/update";

const getIp = () => {
    return PublicIpGetter();
};
let config = {
    headers: {
        ip: PublicIpGetter(),
    },
};
const localData = JSON.parse(localStorage.getItem("user"));
const token = localData?.accessToken;

export const POST = (method, url, data) => {
    const ip = localStorage.getItem("ip");
    console.log(DOMAIN + url);
    return axios({
        method,
        url: DOMAIN + url,
        data,
        headers: { ip: ip, Authorization: token },
    })
        .then((result) => result.data)
        .catch((result) => {
            alert("error");
            console.log(result);
            return null;
        });
};
