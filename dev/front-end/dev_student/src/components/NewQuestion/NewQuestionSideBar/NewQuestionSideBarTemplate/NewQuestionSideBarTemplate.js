import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NewQuestionRuleTemplate from '../NewQuestionRuleTemplate/NewQuestionRuleTemplate';
import NewQuestionSideBarHowto from '../NewQuestionSideBarHowto/NewQuestionSideBarHowto';

const NewQuestionSidebarTemplate = ({}) =>{
    return(
        <React.Fragment>
            <Container className="newquestion-sidebar-wrapper">
            <Row>
                <NewQuestionRuleTemplate>
                </NewQuestionRuleTemplate>
            </Row>
            <Row>
                <NewQuestionSideBarHowto/>
            </Row>
            </Container>
            <div style={{marginBottom:'3.5%'}}/>
        </React.Fragment>
    );
}

export default NewQuestionSidebarTemplate;