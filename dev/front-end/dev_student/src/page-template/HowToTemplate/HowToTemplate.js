import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./HowToTemplate.css";

// component
import HowToSidebarComponent from "component/HowToSidebarComponent/HowToSidebarComponent";

const HowToTemplate = ({ children, tag, handleNewQuestion }) => {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col md={9} className="howto-wrapper">
                        {children}
                    </Col>
                    <Col md={3}>
                        <HowToSidebarComponent tag={tag} handleNewQuestion={handleNewQuestion}></HowToSidebarComponent>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};
export default HowToTemplate;
