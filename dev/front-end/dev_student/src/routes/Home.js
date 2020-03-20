import React from 'react';
import Slider from '../components/Slider/Slider';
import { Container, Row, Col } from 'reactstrap';
const Home = ({ history }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <Slider delay={5000} >
                    </Slider>
                </Col>
            </Row>
            <Row>
                <h1>광고문의</h1>
            </Row>
        </Container>
    )
}

export default Home;