import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HowToTemplate from '../components/HowTo/HowToTemplate/HowToTemplate';
import HowToListTemplate from '../components/HowTo/HowToListTemplate/HowToListTemplate';
import HowToContent from '../components/HowTo/HowToContent/HowToContent';
import FindAllQuestions from '../query/FindAllQuestions';
class HowTo extends Component {
    render() {
        return (
            <HowToTemplate>
                 <Router>
                <Switch>
                    <Route exact path="/howto"
                        render={() =>
                                <HowToListTemplate
                                    questionList = { <FindAllQuestions/>}
                                    question_count={"unimplemented"}>
                                </HowToListTemplate>
                      
                        } />

                    <Route path="/howto/question/:id"
                       component={HowToContent}/>
                </Switch>
            </Router>
            </HowToTemplate>

           
        )
    };
}

export default HowTo;