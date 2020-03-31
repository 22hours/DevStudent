import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { EmailCheck, AuthRoute, NewQuestion, HowTo, Home, Posts, About, Login, MyPage, Todo, NotFound } from './routes';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
const MyRouter =(props) =>{
        const {saveLoginState,user, authenticated, login} = props;
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
                  <Route path="/emailChekc/:rand" component={EmailCheck}/>
          
                  <Route
                    path="/login"
                    render={props => (
                      <Login authenticated={authenticated} saveLoginState={saveLoginState} {...props} />
                    )}
                  />

                  <AuthRoute
                    authenticated={authenticated}
                    path="/newquestion"
                    render={props => <NewQuestion user={user} {...props} />}
                  />

                  <Route component={NotFound} />
                </Switch>
              </div>
              <Footer />
            </div>
          </Router>
        );
}

export default MyRouter;