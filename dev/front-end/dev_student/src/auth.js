import { useMutation } from "react-apollo";
const users = [
    { email: "test", password: "123", name: "Kim" },
    { email: "lee@test.com", password: "456", name: "Lee" },
    { email: "park@test.com", password: "789", name: "Park" },
    { email: "admin", password: "123", name: "winterlood" },
];

const logIn = ({ email, password }) => {
    const user = users.find((user) => user.email === email && user.password === password);
    if (user === undefined) throw new Error();
    window.localStorage.setItem("email", email);
    window.localStorage.setItem("name", user.name);
    return user;
};

const logOut = () => {
    console.log("logout!!");
    window.localStorage.clear();
};

const setAuthInfo = (email, nickname) => {
    window.localStorage.setItem("email", email);
    window.localStorage.setItem("nickname", nickname);
    window.localStorage.setItem("auth", true);
};

const getAuthInfo = () => {
    return {
        nickname: window.localStorage.getItem("nickname"),
        email: window.localStorage.getItem("email"),
        auth: window.localStorage.getItem("auth"),
    };
};

const hashPassword = (password) => {
    const crypto = require("crypto");

    const pw = password;
    const secret = "MySecretKey1$1$234";

    const hashed = crypto.createHmac("sha256", secret).update(pw).digest("hex");
    return hashed;
};

const AuthStateCheck = () => {
    const accessToken = window.localStorage.getItem("token");
    const refreshToken = window.localStorage.getItem("refreshToken");
};

export { logIn, logOut, setAuthInfo, getAuthInfo, hashPassword };
