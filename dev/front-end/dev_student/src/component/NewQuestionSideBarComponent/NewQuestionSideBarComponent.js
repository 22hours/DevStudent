import React from "react";
import { Container, Row } from "reactstrap";

// modules
import NewQuestionRuleModule from "module/NewQuestionRuleModule/NewQuestionRuleModule";
import NewQuestionGuideModule from "module/NewQuestionGuideModule/NewQuestionGuideModule";

const NewQuestionSideBarComponent = ({}) => {
    return (
        <React.Fragment>
            <Container className="newquestion-sidebar-wrapper">
                <Row>
                    <NewQuestionRuleModule></NewQuestionRuleModule>
                </Row>
                <Row>
                    <NewQuestionGuideModule />
                </Row>
            </Container>
            <div style={{ marginBottom: "3.5%" }} />
        </React.Fragment>
    );
};

export default NewQuestionSideBarComponent;
