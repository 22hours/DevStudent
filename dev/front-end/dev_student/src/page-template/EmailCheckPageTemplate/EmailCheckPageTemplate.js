import React from "react";
import { Container, Row, Button } from "reactstrap";
import "./EmailCheckPageTemplate.css";
import { UPDATE_USER_AUTH_STATE } from "mutation/mutations";
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
            })
            .catch((err) => {
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
                    <Button onClick={handleUpdateAuthState} color="info">
                        이메일 인증
                    </Button>
                </Row>
            </Container>
        </div>
    );
};

export default EmailCheckPageTemplate;
