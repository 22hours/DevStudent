import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import client from "./apolloClient";
import "./App.css";
import MyRouter from "./MyRouter";
import UserContext from "context/UserContext";
import PublicIpGetter from "module/PublicIpGetter/PublicIpGetter";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname: null,
            email: null,
            auth: false,
        };
        console.log("App.js State Init");
    }

    componentDidMount() {
        PublicIpGetter();
        const nickname = window.localStorage.getItem("nickname");
        const email = window.localStorage.getItem("email");
        const auth = window.localStorage.getItem("auth");
        if (auth) {
            this.setState({
                nickname: nickname,
                email: email,
                auth: auth,
            });
        }
    }

    render() {
        const logIn = (nickname, email, accessToken, refreshToken) => {
            this.setState({
                nickname: nickname,
                email: email,
                auth: true,
            });
            window.localStorage.setItem("nickname", nickname);
            window.localStorage.setItem("auth", true);
            window.localStorage.setItem("email", email);
            window.localStorage.setItem("token", accessToken);
            window.localStorage.setItem("refreshToken", refreshToken);
        };

        const logout = () => {
            this.setState({
                nickname: null,
                email: null,
                auth: false,
            });
            window.sessionStorage.clear();
        };

        // const login = ({ email, password }) => { setUser(signIn({ email, password })); }
        return (
            <ApolloProvider client={client}>
                <UserContext.Provider value={this.state}>
                    <MyRouter nickname={this.state.nickname} logIn={logIn} logout={logout}></MyRouter>
                </UserContext.Provider>
            </ApolloProvider>
        );
    }
}
//             <Route path="/howto" component={HowTo} />

//            <Route path="/login" component={Login} />

export default App;
