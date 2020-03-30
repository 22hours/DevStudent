import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, NewQuestion, HowTo, Home, Posts, About, Login, MyPage, Todo, NotFound } from './routes';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import { ApolloProvider } from 'react-apollo';
import client from "./apolloClient";
import { signIn } from './auth';
import './App.css';
import MyRouter from './MyRouter';
class App extends Component {
  constructor(props){
    super(props);    
    this.state = {
      user : null,
      authenticated : false
    }
    console.log("App.js State Init");
  }

  render() {
    console.log("render this");
    const {user, authenticated} = this.state;

    const login = ({ email, password })  => {
        this.setState({
          user : signIn({email,password}),
          authenticated : true
        })
    }

    const logout = () => {
      this.setState({
        user : null,
        authenticated :false
      })
    }

    // const login = ({ email, password }) => { setUser(signIn({ email, password })); }
    return (
      <ApolloProvider client={client}>
        <MyRouter user={user} authenticated={authenticated} login={login} logout={logout}></MyRouter>
      </ApolloProvider>
    );
  };
}
//             <Route path="/howto" component={HowTo} />

//            <Route path="/login" component={Login} />

export default App;
