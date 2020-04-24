import React, { useState, useLayoutEffect } from "react";
import "./RegisterPageTemplate.css";
import { Container, Row, Col } from "reactstrap";
import { Input, Button, FormText, Collapse } from "reactstrap";
import { CREATE_USER } from "mutation/mutations";
import { CHECK_EMAIL } from "mutation/mutations";
import { useMutation } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { hashPassword } from "auth";

const RegisterTemplate = ({
    email,
    setEmail,
    password,
    setPassword,
    rePwd,
    setRePwd,
    nickName,
    schoolName,
    setSchoolName,
    nickCheck,
    pwdCheck,
    pwdRuleCheck,
    rePwdClassName,
    pwdClassName,
    setEmailSelect,
    emailSelect,
    setPwdCheck,
    setRePwdClassName,
    passwordRule,
    nickNameCheck,
}) => {
    const [createUser] = useMutation(CREATE_USER);
    const [checkEmail, { data }] = useMutation(CHECK_EMAIL);
    const [emailCode, setEmailCode] = useState("");
    const [emailRuleCheck, setEmailRuleCheck] = useState("false");

    useLayoutEffect(() => {
        if (data == null) return;
        if (data.checkEmail.count === "duplicated") {
            alert("중복된 이메일 입니다.");
            return;
        } else {
            alert("사용 가능한 이메일 입니다.");
            setEmailCode(data.checkEmail.count);
            toggle();
        }
    }, [data]);

    const btn_style = {
        fontSize: "12px",
        height: "100%",
        marginBottom: "5px",
    };

    const register_btn_style = {
        marginTop: "10px",
    };

    //비밀번호 확인용
    const RepwInputRenderer = () => {
        if (password < 1 || rePwd < 1) return;
        if (pwdRuleCheck === "false") return;
        if (pwdRuleCheck === "true" && emailRuleCheck === "true") {
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

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const checkSetEmail = (value) => {
        setEmail(value);
    };

    const checkSetEmailSelect = (value) => {
        setEmailSelect(value);
    };

    return (
        <div className="register-container-top-wrapper">
            <Container>
                <Row>
                    <Col xs={2}></Col>
                    <Col xs={8} className="register-container-wrapper">
                        <div className="registertemplate-header">회원가입</div>
                        <div className="login-logo_wrapper">
                            <img alt="" src="/img/devstu_round_logo.png"></img>
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
                                                placeholder="이메일을 입력해주세요."
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
                                            </Input>
                                        </div>
                                    </div>
                                    <div className="nickName-check-button-wrapper">
                                        <Button
                                            color="info"
                                            style={btn_style}
                                            onClick={() => {
                                                checkEmail({
                                                    variables: {
                                                        email: email + emailSelect,
                                                    },
                                                });
                                            }}
                                        >
                                            확인
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            {/* <Collapse isOpen={isOpen}>
                                <div className="input-box">
                                    <span className="register-label-style">인증번호</span>
                                    <div className="nickName-input-box">
                                        <div className="nickName-input">
                                            <Input
                                                id="inputrandnum"
                                                type="text"
                                                onChange={({ target: { value } }) => setEmailAuthState(value)}
                                                placeholder="이메일의 인증번호를 입력해주세요."
                                            />
                                        </div>
                                        <div className="nickName-check-button-wrapper">
                                            <Button
                                                color="info"
                                                style={btn_style}
                                                onClick={() => {
                                                    if (emailCode === emailAuthState) {
                                                        alert("이메일 인증에 성공했습니다.");
                                                        setEmailRuleCheck("true");
                                                        setEmailAuthState("");
                                                        toggle();
                                                    } else {
                                                        alert("인증번호가 일치하지 않습니다. 다시 입력해주세요.");
                                                        setEmailRuleCheck("false");
                                                        return;
                                                    }
                                                }}
                                            >
                                                확인
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Collapse> */}
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
                                        placeholder="비밀번호를 규칙에 맞게 입력해주세요."
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
                                        placeholder="비밀번호를 다시 입력해주세요."
                                        onBlur={RepwInputRenderer}
                                    />
                                </div>
                            </div>
                            {/* <div className="input-box">
                                <span className="register-label-style">닉네임</span>
                                <div className="nickName-input-box">
                                    <div className="nickName-input">
                                        <Input
                                            id="inputnickname"
                                            onChange={({ target: { value } }) => nickNameCheck(value)}
                                            type="text"
                                            name="nickname"
                                            placeholder="닉네임은 3자리 ~ 8자리로 입력해주세요."
                                        />
                                    </div>
                                    <div className="nickName-check-button-wrapper">
                                        <Button
                                            color="info"
                                            style={btn_style}
                                            onClick={() => {
                                                if (nickName == null) return;
                                                if (nickName.length > 8 || nickName.length < 3) {
                                                    alert("3자리~ 8자리 닉네임을 사용해주세요.");
                                                } else {
                                                    checkDuplicateNickname({
                                                        variables: {
                                                            nickname: nickName,
                                                        },
                                                    });
                                                }
                                            }}
                                        >
                                            확인
                                        </Button>
                                    </div>
                                </div>
                            </div> */}
                            <div className="input-box">
                                <span className="register-label-style">대학교</span>
                                <div className="register-input-box">
                                    <Input
                                        onChange={({ target: { value } }) => setSchoolName(value)}
                                        type="text"
                                        name="universityname"
                                        id="inputschool"
                                        placeholder="대학교 이름을 입력해주세요."
                                    />
                                </div>
                            </div>

                            <div className="input-box">
                                <Button
                                    style={register_btn_style}
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
                                                    password: hashPassword(password),
                                                    email: email + emailSelect,
                                                    nickname: nickName,
                                                    schoolName: schoolName,
                                                },
                                            });
                                            alert("회원가입 성공!!");
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
