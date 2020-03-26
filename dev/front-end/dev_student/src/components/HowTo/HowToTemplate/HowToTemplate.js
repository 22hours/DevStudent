import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './HowToTemplate.css';
const HowToTemplate = ({children, match}) => {
    const renderLeft = () => <h1>dd</h1>
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col md={9} className="howto-wrapper">{children}</Col>
                    <Col md={3} ><h1>11</h1></Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}
export default HowToTemplate;