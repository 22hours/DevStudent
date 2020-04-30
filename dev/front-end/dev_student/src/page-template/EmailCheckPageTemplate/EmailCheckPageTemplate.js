import React from "react";
import { Container, Row, Button } from "reactstrap";
import "./EmailCheckPageTemplate.css";
const EmailCheckPageTemplate = ({ data }) => {
    return (
        <div className="EmailCheckPageTemplate">
            <Container>
                <Row>
                    <h1>이메일 인증은 아래 버튼을 클릭해주세요</h1>
                </Row>
                <Row>
                    <Button color="info">이메일 인증</Button>
                </Row>
            </Container>
        </div>
    );
};

export default EmailCheckPageTemplate;
