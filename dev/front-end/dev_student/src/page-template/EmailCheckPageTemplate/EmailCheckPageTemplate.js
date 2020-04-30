import React from "react";
import { Container, Row, Button } from "reactstrap";
import "./EmailCheckPageTemplate.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const EmailCheckPageTemplate = ({ data }) => {
    return (
        <div className="EmailCheckPageTemplate">
            <Container>
                <div className="email-check-wrapper">
                    <div className="header-row">
                        <MailOutlineIcon style={{ fontSize: "140px" }} />
                        <br />
                        <br />
                        <p id="header-label">이메일 인증이 완료되었습니다</p>
                    </div>
                    <div className="item-row">
                        <span id="descript">반갑습니다! {data?.email ? data?.email : "king199777@gmail.com"}님</span>
                        <br />
                        <span id="descript">이제부터 DEVSTU의 모든 기능을 자유롭게 사용하실 수 있습니다</span>
                        <br /> <br />
                        <span id="email-label">인증된 이메일</span>
                        <br />
                        <span id="email">{data?.email ? data?.email : "king199777@gmail.com"}</span>
                    </div>
                    <div>
                        <Button
                            color="info"
                            onClick={() => {
                                window.location.href = "/login";
                            }}
                        >
                            로그인 하러 가기
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default EmailCheckPageTemplate;
