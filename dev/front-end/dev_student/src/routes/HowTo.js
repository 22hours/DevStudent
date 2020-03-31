import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HowToTemplate from '../components/HowTo/HowToTemplate/HowToTemplate';
import HowToListTemplate from '../components/HowTo/HowToListTemplate/HowToListTemplate';
import HowToContent from '../components/HowTo/HowToContent/HowToContent';
import { useQuery } from '@apollo/react-hooks';
import { findAllQuestions } from '../query/queries'
import HowToItem from '../components/HowTo/HowToItem/HowToItem';


const HowTo = () => {
    const [param, setParam] = useState('date');
    const [hot, setHot] = useState([
        { idx: 0, id: 'winterlood', text: '내가 문어강정 사줄게 효빈아', views: '1,221' },
        { idx: 1, id: 'damin8', text: '나는 와플사줄게', views: '1,998' },
        { idx: 2, id: 'hagujung', text: '얘들아 나는 정구야', views: '12,345' }
    ])

    const [tag, setTag] = useState([
        { idx: 0, tagname: 'JavaScript', tagcount: '500' },
        { idx: 1, tagname: '.NetFramework', tagcount: '100' },
        { idx: 2, tagname: 'C++', tagcount: '400' },
        { idx: 3, tagname: 'Android', tagcount: '300' },
        { idx: 4, tagname: 'Html', tagcount: '200' }
    ])

    const { loading, error, data } = useQuery(findAllQuestions, {
        variables: { param: param },
    });

    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error!</p>;
    const questionCount = Object.keys(data.findAllQuestions).length;
    const questionList = <div>
        {
            data.findAllQuestions.map(({ _id, title, author, tags, date, content, answerCount, views, previews }) => (
                <HowToItem
                    id={_id}
                    key={_id}
                    author={author}
                    title={title}
                    answers={answerCount}
                    views={views}
                    date={date}
                    previews={previews}>
                    ></HowToItem>
            ))
        }
    </div>
    const handleParam = (value) => {
        setParam({
            param:value
        })
    }
    return (
        <HowToTemplate hot={hot} tag={tag}>
            <Router>
                <Switch>
                    <Route exact path="/howto"
                        render={() =>
                            <HowToListTemplate
                                setParam={setParam}
                                questionCount={questionCount}
                                param={param}
                                questionList={questionList}
                                question_count={"unimplemented"}>
                            </HowToListTemplate>
                        } />

                    <Route path="/howto/question/:id"
                        component={HowToContent} />
                </Switch>
            </Router>
        </HowToTemplate>


    );
}

export default HowTo;