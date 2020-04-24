import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { TextField } from "@material-ui/core";
import "./NicknameModuleTemplate.css";

const NicknameModuleTemplate = () => {
    const [nickName, setNickname] = useState("");

    return (
        <React.Fragment>
            <div className="nickname-container-top-wrapper">
                <Container>
                    <Row>
                        <Col xs={2}></Col>
                        <Col xs={8} className="nickname-container-wrapper">
                            <div className="nickname-welcome-wrapper">
                                <span className="nickname-welcome-span">닉네임 설정</span>
                            </div>
                            <div className="nickname-logo_wrapper">
                                <img alt="" src="/img/devstu_round_logo.png"></img>
                            </div>
                            <div className="nickname-form-wrapper">
                                <div className="nickname-state-form">
                                    인증된 이메일은 <b>sg05138@naver.com</b> 입니다.
                                    <br />
                                    "대학생 개발자 닷컴" 에서 사용할 닉네임을 설정해주세요.
                                    <br />
                                    닉네임을 입력하지 않으면 다시 로그인 페이지로 이동됩니다.
                                </div>
                                <div className="login-page-margin"></div>
                                <div className="nickname-form-resize-wrapper">
                                    <TextField
                                        value={nickName}
                                        type="text"
                                        onChange={({ target: { value } }) => setNickname(value)}
                                        label="닉네임"
                                        placeholder="사용할 닉네임을 입력해주세요."
                                    />
                                </div>
                            </div>
                            <div className="nicknameed-confirm-wrapper">
                                <div className="nickname-form-resize-wrapper">
                                    <Button color="info">확인</Button>
                                </div>
                            </div>
                        </Col>
                        <Col xs={2}></Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};
export default NicknameModuleTemplate;
