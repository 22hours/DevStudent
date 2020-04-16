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

export { logIn, logOut, setAuthInfo, getAuthInfo };
