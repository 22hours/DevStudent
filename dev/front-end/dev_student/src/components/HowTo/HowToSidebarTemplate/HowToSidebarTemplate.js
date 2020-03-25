import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import './HowToSidebarTemplate.css';
import QuestionTagTemplate from '../QuestionTagTemplate/QuestionTagTemplate';
import HotQuestionTemplate from '../HotQuestionTemplate/HotQuestionTemplate';
import {Button} from 'reactstrap';

class HowToSidebarTemplate extends Component{
    render(){
        const{ hot } = this.props;
        return(
            <Container className="howto-sidebar-wrapper">
                <Row>
                    <Button className="new-question-button" color="info">New Question!</Button>
                </Row>
                <Row>
                    <QuestionTagTemplate/>
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