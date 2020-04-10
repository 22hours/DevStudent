import React from "react";
import { Container, Row } from "reactstrap";
import "./HotLinksModuleTemplate.css";

const HotLinksModuleTemplate = ({ hotquestionList }) => {
    return (
        <Container className="howto-hot-question-wrapper">
            <Row className="howto-hot-question-header-wrapper">
                <div className="hot-question-header">Hot Questions</div>
            </Row>
            <Row className="howto-hot-question-list-wrapper">
                <div className="hot-question-list-items">{hotquestionList}</div>
            </Row>
        </Container>
    );
};

export default HotLinksModuleTemplate;
