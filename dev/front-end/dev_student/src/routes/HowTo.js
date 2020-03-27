import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HowToTemplate from '../components/HowTo/HowToTemplate/HowToTemplate';
import HowToListTemplate from '../components/HowTo/HowToListTemplate/HowToListTemplate';
import HowToContent from '../components/HowTo/HowToContent/HowToContent';
import FindAllQuestions from '../query/FindAllQuestions';
class HowTo extends Component {

    state = {
        hot: [
            { idx:0, id: 'winterlood', text: '내가 문어강정 사줄게 효빈아', views: '1,221' },
            { idx:1, id: 'damin8', text: '나는 와플사줄게', views: '1,998' },
            { idx:2, id: 'hagujung', text: '얘들아 나는 정구야', views: '12,345' },
            
          ],
        tag:[
            {idx:0, tagname:'JavaScript', tagcount:'500'},
            {idx:1, tagname:'.NetFramework', tagcount:'100'},
            {idx:2, tagname:'C++', tagcount:'400'},
            {idx:3, tagname:'Android', tagcount:'300'},
            {idx:4, tagname:'Html', tagcount:'200'},
        ]

    }
    render() {
        const handleNewQuestion = () => {
            this.props.history.push('/newquestion');        
        }
        return (
            <HowToTemplate hot={this.state.hot} tag={this.state.tag} handleNewQuestion={handleNewQuestion}>
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