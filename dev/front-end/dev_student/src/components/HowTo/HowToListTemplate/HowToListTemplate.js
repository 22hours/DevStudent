import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HowToItem from '../HowToItem/HowToItem';
import HowToListHeaderTemplate from '../HowToListHeaderTemplate/HowToListHeaderTemplate';
import HowToQuestionListTemplate from '../HowToQuestionListTemplate/HowToQuestionListTemplate';
const HowToListTemplate = ({questions,question_count,tags}) => {
    const questionList = questions.map(
        ({id,author,title,previews,answers,views,date}) => (
            <HowToItem
            id={id}
            key={id}
            author={author}
            title={title}
            previews={previews}
            answers={answers}
            views={views}
            date={date}>
            </HowToItem>
        )
    )
    return (
        <React.Fragment>
        <Container className='margin-top-3 red-border'>
           <HowToListHeaderTemplate tags={tags} question_count={question_count}></HowToListHeaderTemplate>
        </Container>
        <Row className="bottom-border">
        </Row>
        <div >
           {questionList}
        </div>
        <Container className='margin-top-3 red-border'>
        </Container>
        </React.Fragment>
    );
}

export default HowToListTemplate;