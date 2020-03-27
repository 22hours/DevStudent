import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthRoute, NewQuestion, HowTo,Home, Posts, About, Login, MyPage, Todo, NotFound } from './routes';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import { ApolloProvider } from 'react-apollo';
import client from "./apolloClient";
import {signIn} from './auth';
import './App.css';
const App = () => {
  const [user, setUser] = useState(null);
  const authenticated = user != null;
  const login = ({ email, password }) =>setUser(signIn({ email, password }));
  const logout = () => setUser(null);
  return (
    <ApolloProvider client={client}>
      <Router>
        <div id="rt">
          <Header user={user} authenticated={authenticated}/>
          <div className="Article">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about/:username" component={About} />
            <Route path="/posts" component={Posts} />
            <Route path="/mypage" component={MyPage} />
            <Route path="/todolist" component={Todo} />
            <Route path="/newquestion" component={NewQuestion}></Route>
            <Route
            path="/login"
            render={props => (
              <Login authenticated={authenticated} login={login} {...props} />
            )}
          />
            <AuthRoute 
              authenticated={authenticated}
             path="/howto" 
             render ={
               props => <HowTo user={user} {...props}></HowTo>
             }
             />
            <Route component={NotFound} />
          </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    </ApolloProvider>
  );
}
//             <Route path="/howto" component={HowTo} />

//            <Route path="/login" component={Login} />

export default App;
