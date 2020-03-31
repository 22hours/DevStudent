import React, { Component, useState } from 'react';
import { ApolloProvider } from 'react-apollo';
import client from "./apolloClient";
import { signIn } from './auth';

import './App.css';
import MyRouter from './MyRouter';
import UserContext from './Context/UserContext';

class App extends Component {
  constructor(props){
    super(props);    
    this.state = {
      user : 'null',
      authenticated : false
    }
    console.log("App.js State Init");
  }

  componentDidMount(){
    const sessionUser = window.sessionStorage.getItem('user');
    const sessionAuth = window.sessionStorage.getItem('auth');
    if(sessionUser){
      this.setState({
        user : sessionUser,
        authenticated : sessionAuth
      })
    }
  }

  render() {
    const saveLoginState = (email,token)  => {
        this.setState({
          user : email,
          authenticated : true
        })
        window.sessionStorage.setItem('user',email);
        window.sessionStorage.setItem('auth',true);
        window.sessionStorage.setItem('token',token);

    }

    const logout = () => {
      this.setState({
        user : null,
        authenticated :false
      })
      window.sessionStorage.clear();
    }

    // const login = ({ email, password }) => { setUser(signIn({ email, password })); }
    return (
      <ApolloProvider client={client}>
        <UserContext.Provider value={this.state}>
        <MyRouter authenticated={this.state.authenticated} saveLoginState={saveLoginState} logout={logout}></MyRouter>
        </UserContext.Provider>
      </ApolloProvider>
    );
  };
}
//             <Route path="/howto" component={HowTo} />

//            <Route path="/login" component={Login} />

export default App;
