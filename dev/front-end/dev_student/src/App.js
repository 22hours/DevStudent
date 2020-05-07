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
        const localData = JSON.parse(localStorage.getItem("user"));
        if (localData !== null) {
            const localAuth = localStorage.getItem("auth");
            if (localAuth) {
                this.setState({
                    nickname: localData.nickname,
                    email: localData.email,
                    auth: localAuth,
                });
            }
        }
    }

    render() {
        const logIn = (data) => {
            this.setState({
                nickname: data.nickname,
                email: data.email,
                auth: true,
            });
            window.localStorage.setItem("user", JSON.stringify(data));
            window.localStorage.setItem("auth", true);
            window.location.replace("/");
            // window.localStorage.setItem("nickname", nickname);
            // window.localStorage.setItem("auth", true);
            // window.localStorage.setItem("email", email);
            // window.localStorage.setItem("token", accessToken);
            // window.localStorage.setItem("refreshToken", refreshToken);
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
