import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Content from '../components/Content';
import PostContent from '../components/PostContent';


class Posts extends Component {

    handleContentPage = (number) => {
        console.log(number + "게시물로 page 전환!")
        this.props.history.push('/posts/'+number);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/posts"
                        render={() => <PostContent handleContentPage={this.handleContentPage} />} />
                    <Route path="/posts/:postId" component={Content}></Route>
                </Switch>

            </Router>
        );
    };
}

export default Posts;