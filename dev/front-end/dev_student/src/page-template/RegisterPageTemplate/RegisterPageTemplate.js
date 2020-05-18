import React, { useState, useLayoutEffect } from "react";
import "./RegisterPageTemplate.css";
import { Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Input, Button, FormText } from "reactstrap";

import { Link } from "react-router-dom";
import { hashPassword } from "auth";
import CircularProgress from "@material-ui/core/CircularProgress";
import { POST, CHECK_DUPLICATED_EMAIL, CREATE_USER } from "rest";

const RegisterTemplate = ({
    email,
    setEmail,
    password,
    setPassword,
    rePwd,
    setRePwd,
    schoolName,
    setSchoolName,
    pwdCheck,
    pwdRuleCheck,
    rePwdClassName,
    pwdClassName,
    setEmailSelect,
    emailSelect,
    setPwdCheck,
    setRePwdClassName,
    passwordRule,
}) => {
    // const [createUser] = useMutation(CREATE_USER);
    const [createUserResponse, setCreateUserResponse] = useState(null);
    const [checkEmailResponse, setCheckEmailResponse] = useState(null);

    const [emailRuleCheck, setEmailRuleCheck] = useState("false");
    const [modal, setModal] = useState(false);
    const [emailClick, setEmailClick] = useState(false);
    const [registerClick, setRegisterClick] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState("");
    const [emailDisabled, setEmailDisabled] = useState("");

    const toggle = () => setModal(!modal);

    useLayoutEffect(() => {
        if (checkEmailResponse == null) return;
        if (checkEmailResponse.count === "duplicated") {
            alert("중복된 이메일 입니다.");
            setEmailRuleCheck("false");
            setEmailClick(false);
            return;
        } else {
            alert("사용 가능한 이메일 입니다.");
            setEmailRuleCheck("true");
            setEmailClick(false);
        }
    }, [checkEmailResponse]);
    useLayoutEffect(() => {
        if (createUserResponse == null) return;
        if (createUserResponse === null) {
            alert("회원가입 실패 다시 시도해주세요");
            return;
        } else {
            toggle();
        }
    }, [createUserResponse]);
    const btn_style = {
        fontSize: "12px",
        height: "100%",
        marginBottom: "5px",
    };

    const register_btn_style = {
        marginTop: "10px",
        color: "white",
        fontSize: "16px",
    };

    const modal_style = {
        padding: "10px",
        paddingLeft: "15px",
    };

    const modal_header_style = {
        paddingTop: "10px",
        paddingBottom: "10px",
        fontSize: "16px",
    };

    const modal_btn_style = {
        padding: "3px",
    };

    //비밀번호 확인용
    const RepwInputRenderer = () => {
        if (password < 1 || rePwd < 1) return;
        if (pwdRuleCheck === "false") return;
        if (pwdRuleCheck === "true") {
            if (password !== rePwd) {
                setRePwdClassName("is-invalid");
                alert("비밀번호가 일치하지 않습니다.");
                return rePwdClassName;
            } else {
                setPwdCheck("true");
                setRePwdClassName("is-valid");
                return rePwdClassName;
            }
        }
        if (pwdRuleCheck === "false") {
            alert("비밀번호를 규칙에 맞게 입력해주세요.");
            return;
        }
    };

    const checkSetEmail = (value) => {
        setEmail(value);
        setEmailRuleCheck("false");
    };

    const checkSetEmailSelect = (value) => {
        setEmailSelect(value);
        setEmailRuleCheck("false");
    };

    const EmailButton = () => {
        if (emailClick === true) {
            setEmailDisabled("disabled");
            return (
                <div>
                    <CircularProgress disableShrink size={24} />
                </div>
            );
        } else {
            setEmailDisabled("");
            return <div>확인</div>;
        }
    };

    const RegisterButton = () => {
        if (registerClick === true) {
            setBtnDisabled("disabled");
            return (
                <div>
                    <CircularProgress disableShrink size={25} />
                </div>
            );
        } else {
            setBtnDisabled("");
            return <div>가입하기</div>;
        }
    };

    const AlertModal = () => {
        return (
            <Modal isOpen={modal}>
                <ModalHeader style={modal_header_style}>
                    <b>회원가입 성공</b>
                </ModalHeader>
                <ModalBody style={modal_style}>
                    <b>{email + emailSelect}</b>으로 인증메일을 보냈습니다.
                    <div className="register-margin"></div>
                    메일에 있는 인증 버튼을 눌러 <b>인증을 완료해주세요. </b>
                    <div className="register-margin"></div>
                    확인 버튼을 누르면 <b>로그인화면</b>으로 이동합니다.
                </ModalBody>
                <ModalFooter style={modal_btn_style}>
                    <Link to="/login">
                        <Button color="info">확인</Button>
                    </Link>
                </ModalFooter>
            </Modal>
        );
    };

    return (
        <div className="register-container-top-wrapper">
            <Container>
                <Row>
                    <Col xs={2}></Col>
                    <Col xs={8} className="register-container-wrapper">
                        <div className="registertemplate-header">회원가입</div>
                        <div className="login-logo_wrapper">
                            <img alt="" src="/img/devstu_debal_logo.png"></img>
                        </div>
                        <div className="registertemplate-info">
                            계정이 이미 있는 경우에는{" "}
                            <Link to="/login">
                                <b>로그인</b>
                            </Link>
                            해주세요.
                            <div className="register-margin"></div>
                            가입을 하면 DEVSTU의{" "}
                            <Link to="/terms">
                                <b>대발자 사이트의 이용약관</b>
                            </Link>
                            , <div className="register-margin"></div>
                            <Link to="privacy">
                                <b>개인정보취급방침 및 개인정보3자제공</b>
                            </Link>
                            에 동의하게 됩니다.
                            <div className="register-margin"></div>
                            가입 후 아이디는 변경할 수 없습니다.
                        </div>
                        <div className="main-content-wrapper">
                            <div className="input-box">
                                <span className="register-label-style">이메일</span>
                                <div className="email-input-box">
                                    <div className="email-input-wrapper">
                                        <div className="email-input">
                                            <Input
                                                value={email}
                                                onChange={({ target: { value } }) => checkSetEmail(value)}
                                                type="text"
                                                name="email"
                                                id="inputEmail"
                                            />
                                        </div>
                                        <div className="email-select-wrapper">
                                            <Input
                                                type="select"
                                                onChange={({ target: { value } }) => checkSetEmailSelect(value)}
                                            >
                                                <option>@gmail.com</option>
                                                <option>@naver.com</option>
                                                <option>@daum.net</option>
                                                <option>@nate.com</option>
                                            </Input>
                                        </div>
                                    </div>
                                    <div className="nickName-check-button-wrapper">
                                        <Button
                                            disabled={emailDisabled}
                                            color="info"
                                            style={btn_style}
                                            onClick={() => {
                                                if (email === "null") {
                                                    alert("이메일을 입력해주세요.");
                                                    return;
                                                }
                                                if (email === "") {
                                                    alert("이메일을 입력해주세요.");
                                                    return;
                                                } else {
                                                    setEmailClick(true);
                                                    POST("post", CHECK_DUPLICATED_EMAIL, {
                                                        email: email + emailSelect,
                                                    })
                                                        .then((response) => setCheckEmailResponse(response))
                                                        .catch((response) => console.log(response));
                                                }
                                            }}
                                        >
                                            <EmailButton />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="input-box">
                                <span className="register-label-style">비밀번호</span>

                                <div className="register-input-box">
                                    <Input
                                        value={password}
                                        className={pwdClassName}
                                        onChange={({ target: { value } }) => setPassword(value)}
                                        type="password"
                                        name="password"
                                        id="inputPassword"
                                        onBlur={passwordRule}
                                    />
                                    <FormText>8자~15자 이내, 영문,숫자,특수문자를 혼합하여 입력해주세요. </FormText>
                                </div>
                            </div>
                            <div className="input-box">
                                <span className="register-label-style">비밀번호(확인)</span>
                                <div className="register-input-box">
                                    <Input
                                        value={rePwd}
                                        className={rePwdClassName}
                                        onChange={({ target: { value } }) => setRePwd(value)}
                                        type="password"
                                        name="password"
                                        id="inputPassword"
                                        onBlur={RepwInputRenderer}
                                    />
                                </div>
                            </div>
                            <div className="input-box">
                                <span className="register-label-style">대학교</span>
                                <div className="register-input-box">
                                    <Input
                                        onChange={({ target: { value } }) => setSchoolName(value)}
                                        type="text"
                                        name="universityname"
                                        id="inputschool"
                                    />
                                </div>
                            </div>
                            <div className="input-box">
                                <Button
                                    disabled={btnDisabled}
                                    style={register_btn_style}
                                    color="info"
                                    onClick={() => {
                                        if (password.length < 1 || email.length < 1 || schoolName.length < 1)
                                            return alert("입력란을 모두 채워주세요.");
                                        if (emailRuleCheck === "false") {
                                            alert("이메일 중복 확인을 해주세요.");
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
                                            setRegisterClick(true);
                                            POST("post", CREATE_USER, {
                                                password: hashPassword(password),
                                                email: email + emailSelect,
                                                schoolName: schoolName,
                                            })
                                                .then((response) => setCreateUserResponse(response))
                                                .catch((response) => console.log(response));
                                        }
                                    }}
                                >
                                    <RegisterButton />
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={2}></Col>
                </Row>
            </Container>
            <AlertModal />
        </div>
    );
};
export default RegisterTemplate;
