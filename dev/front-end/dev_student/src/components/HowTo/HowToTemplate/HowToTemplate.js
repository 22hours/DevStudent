import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './HowToTemplate.css';
import HowToSidebarTemplate from '../../HowToSidebar/HowToSidebarTemplate/HowToSidebarTemplate';
const HowToTemplate = ({children,hot,tag,handleNewQuestion}) => {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col md={9} className="howto-wrapper">{children}</Col>
                    <Col md={3} ><HowToSidebarTemplate hot={hot} tag={tag} handleNewQuestion={handleNewQuestion}></HowToSidebarTemplate></Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}
export default HowToTemplate;