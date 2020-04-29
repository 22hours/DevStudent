import React, { useState } from "react";
import "./LoginPageTemplate.css";
import { Container, Col, Row } from "reactstrap";
import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { hashPassword } from "auth";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoginPageTemplate = ({
    email,
    setEmail,
    password,
    setPassword,
    loginToServer,
    btn_style,
    btnClick,
    setBtnClick,
}) => {
    const LoginButton = () => {
        if (btnClick === true) {
            return (
                <div>
                    <CircularProgress disableShrink size={24} />
                </div>
            );
        } else {
            return <div>로그인</div>;
        }
    };

    const EnterKey = (e) => {
        if (e.key === "Enter") {
            if (email.length < 1) return;
            if (password.length < 1) return;
            setBtnClick(true);
            loginToServer({
                variables: {
                    email: email,
                    password: hashPassword(password),
                },
            });
        }
    };

    return (
        <React.Fragment>
            <div className="login-container-top-wrapper">
                <Container>
                    <Row>
                        <Col xs={2}></Col>
                        <Col xs={8} className="login-container-wrapper">
                            <div className="login-welcome-wrapper">
                                <span className="login-welcome-span">로그인</span>
                            </div>
                            <div className="login-logo_wrapper">
                                <img alt="" src="/img/devstu_round_logo.png"></img>
                            </div>
                            <div className="login-form-wrapper">
                                <div className="login-form-resize-wrapper">
                                    <TextField
                                        value={email}
                                        onChange={({ target: { value } }) => setEmail(value)}
                                        width="100%"
                                        id="standard-basic"
                                        label="이메일 주소"
                                        onKeyPress={EnterKey}
                                    />
                                </div>
                            </div>
                            <div className="login-form-wrapper">
                                <div className="login-form-resize-wrapper">
                                    <TextField
                                        value={password}
                                        onChange={({ target: { value } }) => setPassword(value)}
                                        id="standard-password-input"
                                        label="비밀번호"
                                        type="password"
                                        autoComplete="current-password"
                                        onKeyPress={EnterKey}
                                    />
                                </div>
                            </div>
                            <div className="login-form-wrapper">
                                <div className="login-form-resize-wrapper">
                                    <Button
                                        onClick={() => {
                                            if (email.length < 1) return;
                                            if (password.length < 1) return;
                                            setBtnClick(true);
                                            loginToServer({
                                                variables: {
                                                    email: email,
                                                    password: hashPassword(password),
                                                },
                                            });
                                        }}
                                        variant="contained"
                                        style={btn_style}
                                    >
                                        <LoginButton />
                                    </Button>
                                </div>
                            </div>
                            <div className="login-form-wrapper">
                                <div className="login-form-resize-wrapper">
                                    <span>
                                        아직 계정이 없으신가요?
                                        <br />
                                    </span>
                                    <Link to="/register">회원가입</Link>
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

export default LoginPageTemplate;
