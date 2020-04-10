import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Redirect } from "react-router-dom";
import "./EmailCheckPageTemplate.css";
import { UPDATE_USER_AUTH_STATE } from "../../mutation/mutations";
import { useMutation } from "react-apollo";
const EmailCheckPageTemplate = ({ rand }) => {
    const [updateUserAuthState] = useMutation(UPDATE_USER_AUTH_STATE);

    const handleUpdateAuthState = async () => {
        updateUserAuthState({
            variables: {
                authState: rand,
            },
        })
            .then((response) => {
                alert("이메일 인증에 성공하셨습니다");
                return <Redirect to="/"></Redirect>;
                window.location.href = "http://localhost:3000/login";
            })
            .catch((err) => {
                return <Redirect to="/"></Redirect>;
                alert(err.messeage);
            });
    };

    return (
        <div className="email-check-wrapper">
            <Container>
                <Row>
                    <h1>이메일 인증은 아래 버튼을 클릭해주세요</h1>
                </Row>
                <Row>
                    <Button onClick={handleUpdateAuthState} color="primary">
                        이메일 인증
                    </Button>
                </Row>
            </Container>
        </div>
    );
};

export default EmailCheckPageTemplate;
