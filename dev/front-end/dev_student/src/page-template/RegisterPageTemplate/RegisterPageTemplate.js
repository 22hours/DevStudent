import React from "react";
import "./RegisterPageTemplate.css";
import { Container, Row, Col } from "reactstrap";
import { Input, Button } from "reactstrap";
import { CREATE_USER } from "mutation/mutations";
import { useMutation } from "@apollo/react-hooks";
const RegisterTemplate = ({
    email,
    setEmail,
    password,
    setPassword,
    nickName,
    setNickName,
    schoolName,
    setSchoolName,
    RepwInputRenderer,
}) => {
    const [createUser, { data }] = useMutation(CREATE_USER);
    const btn_style = {
        fontSize: "12px",
    };
    return (
        <div className="register-container-top-wrapper">
            <Container>
                <Row>
                    <Col xs={2}></Col>
                    <Col xs={8} className="register-container-wrapper">
                        <div className="registertemplate-header">Register</div>
                        <div className="login-logo_wrapper">
                            <img src="/img/devstu_round_logo.png"></img>
                        </div>
                        <div className="registertemplate-info">
                            계정이 이미 있는 경우에는 로그인해주세요.
                            <br />
                            가입을 하면 DEVSTU의 이용약관, 개인정보취급방침 및 개인정보3자제공에 동의하게 됩니다.
                            <br />
                            가입 후 아이디는 변경할 수 없습니다.
                        </div>
                        <div className="main-content-wrapper">
                            <div className="input-box">
                                <span className="register-label-style">Email</span>
                                <div className="register-input-box">
                                    <Input
                                        value={email}
                                        onChange={({ target: { value } }) => setEmail(value)}
                                        type="email"
                                        name="email"
                                        _id="inputEmail"
                                        placeholder="devstu@developer.com"
                                    />
                                </div>
                            </div>
                            <div className="input-box">
                                <span className="register-label-style">Password</span>
                                <div className="register-input-box">
                                    <Input
                                        value={password}
                                        onChange={({ target: { value } }) => setPassword(value)}
                                        val_id
                                        type="password"
                                        name="password"
                                        _id="inputPassword"
                                        placeholder="password"
                                    />
                                </div>
                            </div>
                            <div className="input-box">
                                <span className="register-label-style">Checking</span>
                                <div className="register-input-box">
                                    <RepwInputRenderer />
                                </div>
                            </div>
                            <div className="input-box">
                                <span className="register-label-style">Nickname</span>
                                <div className="nickName-input-box">
                                    <Input
                                        onChange={({ target: { value } }) => setNickName(value)}
                                        type="text"
                                        name="nickname"
                                        _id="inputnickname"
                                        placeholder="devstu"
                                    />
                                    <div className="nickName-check-button-wrapper">
                                        <Button style={btn_style}>확인</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="input-box">
                                <span className="register-label-style">University</span>
                                <div className="register-input-box">
                                    <Input
                                        onChange={({ target: { value } }) => setSchoolName(value)}
                                        type="text"
                                        name="universityname"
                                        _id="inputschool"
                                        placeholder="catholic"
                                    />
                                </div>
                            </div>
                            <div className="input-box">
                                <Button
                                    color="info"
                                    onClick={() => {
                                        if (
                                            password.length < 1 ||
                                            email.length < 1 ||
                                            schoolName.length < 1 ||
                                            nickName < 1
                                        )
                                            return alert("입력란을 모두 채워주세요.");
                                        createUser({
                                            variables: {
                                                password: password,
                                                email: email,
                                                nickname: nickName,
                                                schoolName: schoolName,
                                            },
                                        });
                                    }}
                                >
                                    가입하기
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={2}></Col>
                </Row>
            </Container>
        </div>
    );
};
export default RegisterTemplate;
