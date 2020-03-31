import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import './HowToSidebarTemplate.css';
import QuestionTagTemplate from '../QuestionTagTemplate/QuestionTagTemplate';
import HotQuestionTemplate from '../HotQuestionTemplate/HotQuestionTemplate';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

class HowToSidebarTemplate extends Component{
    render(){
        
        const{ hot,tag,handleNewQuestion } = this.props;
        const btn_style={
            fontSize:'20px',
            color:'white',
            width:'100%'
        }
        return(
            <React.Fragment>
            <Container className="howto-sidebar-wrapper">
                <Row>
                    <Link to="/newquestion" style={btn_style}>
                        <Button onClick={handleNewQuestion} className="new-question-button" color="info" style={btn_style}>
                            NewQuestion!
                        </Button>
                    </Link>
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
            <div style={{marginBottom:'3.5%'}}>

            </div>
            </React.Fragment>
        );
    }
}
export default HowToSidebarTemplate;