import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import client from "./apolloClient";
import "./App.css";
import MyRouter from "./MyRouter";
import UserContext from "context/UserContext";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "null",
            authenticated: false,
        };
        console.log("App.js State Init");
    }

    componentDidMount() {
        const sessionUser = window.sessionStorage.getItem("nickname");
        const sessionAuth = window.sessionStorage.getItem("auth");
        if (sessionUser) {
            this.setState({
                user: sessionUser,
                authenticated: sessionAuth,
            });
        }
    }

    render() {
        const saveLoginState = (nickname, token) => {
            this.setState({
                user: nickname,
                authenticated: true,
            });
            window.sessionStorage.setItem("nickname", nickname);
            window.sessionStorage.setItem("auth", true);
            window.sessionStorage.setItem("token", token);
        };

        const logout = () => {
            this.setState({
                user: null,
                authenticated: false,
            });
            window.sessionStorage.clear();
        };

        // const login = ({ email, password }) => { setUser(signIn({ email, password })); }
        return (
            <ApolloProvider client={client}>
                <UserContext.Provider value={this.state}>
                    <MyRouter
                        authenticated={this.state.authenticated}
                        saveLoginState={saveLoginState}
                        logout={logout}
                    ></MyRouter>
                </UserContext.Provider>
            </ApolloProvider>
        );
    }
}
//             <Route path="/howto" component={HowTo} />

//            <Route path="/login" component={Login} />

export default App;
