import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import './HowToSidebarTemplate.css';
import QuestionTagTemplate from '../QuestionTagTemplate/QuestionTagTemplate';
import HotQuestionTemplate from '../HotQuestionTemplate/HotQuestionTemplate';
import {Button} from 'reactstrap';

class HowToSidebarTemplate extends Component{
    render(){
        
        const{ hot,tag,handleNewQuestion } = this.props;
        const btn_style={
            fontSize:'20px'
        }
        return(
            <Container className="howto-sidebar-wrapper">
                <Row>
                    <Button onClick={handleNewQuestion} className="new-question-button" color="info" style={btn_style}>New Question!</Button>
                </Row>
                <Row>
                    <QuestionTagTemplate
                    tag={tag}>
                    </QuestionTagTemplate>
                </Row>
                <Row>
                    <HotQuestionTemplate
                    hot={hot}>

                    </HotQuestionTemplate>
                </Row>
            </Container>
        );
    }
}
export default HowToSidebarTemplate;