import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import HotQuestionHeader from '../HotQuestionHeader/HotQuestionHeader';
import HotQuestionList from '../HotQuestionList/HotQuestionList';
import './HotQuestionTemplate.css';

const HotQuestionTemplate = ({hotquestionList}) => {
        
        return(
            <Container className="howto-hot-question-wrapper">
                <Row  className="howto-hot-question-header-wrapper">
                    <HotQuestionHeader/>
                </Row>
                <Row  className="howto-hot-question-list-wrapper">
                    <HotQuestionList
                    hotquestionList={hotquestionList}>
                    </HotQuestionList>
                </Row>
            </Container>
            
        );
    }

export default HotQuestionTemplate;