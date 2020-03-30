import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, NewQuestion, HowTo, Home, Posts, About, Login, MyPage, Todo, NotFound } from './routes';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import UserContext from './Context/UserContenxt';
class MyRouter extends Component{

    render(){
        const {user, authenticated, login, logout} = this.props;
        return(
            <Router>
            <div id="rt">
              <Header user={user} authenticated={authenticated} />
              <div className="Article">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about/:username" component={About} />
                  <Route path="/posts" component={Posts} />
                  <Route path="/mypage" component={MyPage} />
                  <Route path="/todolist" component={Todo} />
                  <Route path="/howto" component={HowTo}/>
                  <Route
                    path="/login"
                    render={props => (
                      <Login authenticated={authenticated} login={login} {...props} />
                    )}
                  />
                   <AuthRoute
                    authenticated={authenticated}
                    path="/newquestion"
                    render={
                      props => <NewQuestion user={user} {...props}></NewQuestion>
                    }
                  />
                  <Route component={NotFound} />
                </Switch>
              </div>
              <Footer />
            </div>
          </Router>
        );
    }
}

export default MyRouter;