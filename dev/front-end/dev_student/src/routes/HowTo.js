import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HowToTemplate from '../components/HowTo/HowToTemplate/HowToTemplate';
import HowToListTemplate from '../components/HowTo/HowToListTemplate/HowToListTemplate';
class HowTo extends Component {
    state = {
        tags: [

        ],
        questions: [
            { id: 1, author: "신다민", title: "아진짜제발", previews: "제발제발요", answers: 20, views: 120, date: "2020-03-23" },
            { id: 2, author: "신다민", title: "아진짜제발", previews: "제발제발요", answers: 20, views: 120, date: "2020-03-23" },
            { id: 3, author: "김효빈", title: "문어강정 맛잇다", previews: "또먹고싶다 ㅎㅎ", answers: 0, views: 2, date: "2020-03-23" }

        ]
    }
    render() {
        const listLeft = () => {
            return (
                <HowToListTemplate />
            );
        }
        return (
            <Router>
                <Switch>
                    <Route exact path="/howto"
                        render={() =>
                            <HowToTemplate>
                                <HowToListTemplate
                                    questions={this.state.questions}
                                    question_count={this.state.questions.length}>
                                </HowToListTemplate>
                            </HowToTemplate>
                        }
                    />

                    <Route path="/howto/question/:key"
                        render={() => <HowToTemplate />} ></Route>
                </Switch>
            </Router>
        )
    };
}

export default HowTo;