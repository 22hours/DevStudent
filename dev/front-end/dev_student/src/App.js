import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HowTo,Home, Posts, About, Login, MyPage, Search, Todo, NotFound } from './routes';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import { ApolloProvider } from 'react-apollo';
import client from "./apolloClient";
import './App.css';
const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div id="rt">
          <Header />
          <div className="Article">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about/:username" component={About} />
            <Route path="/posts" component={Posts} />
            <Route path="/mypage" component={MyPage} />
            <Route path="/login" component={Login} />
            <Route path="/howto" component={HowTo} />
            <Route path="/todolist" component={Todo} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
