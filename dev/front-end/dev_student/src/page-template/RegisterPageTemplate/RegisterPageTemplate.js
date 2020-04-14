import React from "react";
import "./RegisterPageTemplate.css";
import { Container, Row, Col } from "reactstrap";
import { Input, Button, FormText, Form } from "reactstrap";
import { CREATE_USER } from "mutation/mutations";
import { useMutation } from "@apollo/react-hooks";
import { Link } from "react-router-dom";

const RegisterTemplate = ({
    email,
    setEmail,
    password,
    setPassword,
    rePwd,
    setRePwd,
    nickName,
    setNickName,
    schoolName,
    setSchoolName,
    checkDuplicateNickname,
    nickCheck,
    pwdCheck,
    pwdRuleCheck,
    RepwInputRenderer,
    rePwdClassName,
    pwdClassName,
    emailRuleCheck,
    setEmailRuleCheck,
    passwordRule,
}) => {
    const [createUser, { data }] = useMutation(CREATE_USER);
    const btn_style = {
        fontSize: "12px",
        height: "100%",
        marginBottom: "5px",
    };
    const emailRule = () => {
        var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

        if (email.match(regExp) == null) {
            alert("이메일을 다시 입력해주세요.");
            return;
        } else {
            setEmailRuleCheck("true");
        }
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
                            계정이 이미 있는 경우에는 <Link to="/login">로그인</Link>해주세요.
                            <br />
                            가입을 하면 DEVSTU의 <Link to="/terms">이용약관</Link>,{" "}
                            <Link to="privacy">개인정보취급방침 및 개인정보3자제공</Link>에 동의하게 됩니다.
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
                                        id="inputEmail"
                                        placeholder="devstu@developer.com"
                                        onBlur={emailRule}
                                    />
                                </div>
                            </div>
                            <div className="input-box">
                                <span className="register-label-style">Password</span>

                                <div className="register-input-box">
                                    <Input
                                        value={password}
                                        className={pwdClassName}
                                        onChange={({ target: { value } }) => setPassword(value)}
                                        type="password"
                                        name="password"
                                        id="inputPassword"
                                        placeholder="devstu2020!!"
                                        onBlur={passwordRule}
                                    />
                                    <FormText>
                                        비밀번호는 8자~15자 이내로, 영문,숫자, 특수문자를 혼합하여 입력해주세요.{" "}
                                    </FormText>
                                </div>
                            </div>
                            <div className="input-box">
                                <span className="register-label-style">Password (Check)</span>
                                <div className="register-input-box">
                                    <Input
                                        value={rePwd}
                                        className={rePwdClassName}
                                        onChange={({ target: { value } }) => setRePwd(value)}
                                        type="password"
                                        name="password"
                                        id="inputPassword"
                                        placeholder="passwordCheck"
                                        onBlur={RepwInputRenderer}
                                    />
                                </div>
                            </div>

                            <div className="input-box">
                                <span className="register-label-style">Nickname</span>
                                <div className="nickName-input-box">
                                    <div className="nickName-input">
                                        <Input
                                            id="inputnickname"
                                            onChange={({ target: { value } }) => setNickName(value)}
                                            type="text"
                                            name="nickname"
                                            placeholder="devstu"
                                        />
                                    </div>
                                    <div className="nickName-check-button-wrapper">
                                        <Button
                                            style={btn_style}
                                            onClick={() => {
                                                if (nickName == null) return;
                                                if (nickName > 8 || nickName < 3) {
                                                    alert("4자리~ 8자리 닉네임을 사용해주세요.");
                                                }
                                                checkDuplicateNickname({
                                                    variables: {
                                                        nickname: nickName,
                                                    },
                                                });
                                            }}
                                        >
                                            확인
                                        </Button>
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
                                        id="inputschool"
                                        placeholder="Catholic University"
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
                                        if (emailRuleCheck === "false") {
                                            alert("이메일을 다시 입력해주세요.");
                                            return;
                                        }
                                        if (nickCheck === "false") {
                                            alert("닉네임 중복 확인을 해주세요.");
                                            return;
                                        }
                                        if (pwdCheck === "false") {
                                            alert("비밀번호가 일치하지 않습니다.");
                                            return;
                                        }
                                        if (pwdRuleCheck === "false") {
                                            alert("비밀번호를 규칙에 맞게 입력해주세요.");
                                            return;
                                        } else {
                                            createUser({
                                                variables: {
                                                    password: password,
                                                    email: email,
                                                    nickname: nickName,
                                                    schoolName: schoolName,
                                                },
                                            });
                                        }
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
