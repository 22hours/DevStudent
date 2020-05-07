import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { TextField } from "@material-ui/core";
import "./NicknamePageTemplate.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import ServerError from "pages/ServerError";

const NicknamePageTemplate = ({ nicknameClick, setNicknameClick, createNickname, nickName, setNickname }) => {
    const [btnDisabled, setBtnDisabled] = useState("");
    const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    const email = sessionStorage.getItem("email");

    const NicknameButton = () => {
        if (nicknameClick === true) {
            setBtnDisabled("disabled");
            return (
                <div>
                    <CircularProgress disableShrink size={24} />
                </div>
            );
        } else {
            setBtnDisabled("");
            return <div>확인</div>;
        }
    };
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
                                    <div className="nickname-margin"></div>
                                    "대학생 개발자 닷컴" 에서 사용할 닉네임을 설정해주세요.
                                    <div className="nickname-margin"></div>
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
                            <div className="nickname-confirm-wrapper">
                                <div className="nickname-form-resize-wrapper">
                                    <Button
                                        disabled={btnDisabled}
                                        onClick={() => {
                                            if (korean.test(nickName)) {
                                                alert("닉네임은 영문으로 입력해주세요.");
                                                return;
                                            }
                                            if (nickName.length > 10 || nickName.length < 3) {
                                                alert("닉네임은 3자리 ~ 10자리로 입력해주세요.");
                                                return;
                                            } else {
                                                setNicknameClick(true);
                                                createNickname({
                                                    variables: {
                                                        email: email,
                                                        nickname: nickName,
                                                    },
                                                });
                                            }
                                        }}
                                        color="info"
                                    >
                                        <NicknameButton />
                                    </Button>
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
export default NicknamePageTemplate;
