const users = [
    { email: "test", password: "123", name: "Kim" },
    { email: "lee@test.com", password: "456", name: "Lee" },
    { email: "park@test.com", password: "789", name: "Park" },
    { email: "admin", password: "123", name: "winterlood" },
];

export const signIn = ({ email, password }) => {
    const user = users.find((user) => user.email === email && user.password === password);
    if (user === undefined) throw new Error();
    window.sessionStorage.setItem("email", email);
    window.sessionStorage.setItem("name", user.name);
    return user;
};
