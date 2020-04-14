import React from "react";
import "./FooterModule.css";
import { Container } from "reactstrap";

//imgs
import devstu_text_logo_empty from "img/footer/devstu_text_logo_empty.png";
import { Link } from "react-router-dom";

const FooterModule = () => {
    return (
        <div className="Footer">
            <Container>
                <div className="brand">
                    <img src={devstu_text_logo_empty}></img>
                </div>
                <div className="footer-wrapper">
                    <div className="footer-col">
                        <div className="footer-col-header">22HOURS</div>
                        <div className="footer-col-content">상호명 : DEVSTUDENT</div>
                        <div className="footer-col-content">개인정보관리책임자 : 이정환</div>
                        <div className="footer-col-content">연락처 : 010-9011-7518</div>
                        <div className="footer-col-content">주소 : 가톨릭대학교 성심교정 다솔관 406호 FAN</div>
                    </div>
                    <div className="footer-col">
                        <div className="footer-col-header">MEMBERS</div>
                        <div className="footer-col-content">
                            <a href="https://github.com/winterlood">이정환</a>
                        </div>
                        <div className="footer-col-content">
                            <a href="https://github.com/damin8">신다민</a>
                        </div>
                        <div className="footer-col-content">
                            <a href="https://github.com/hjg0629">하정구</a>
                        </div>
                        <div className="footer-col-content">
                            <a href="https://github.com/sg05138">김효빈</a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <div className="footer-col-header">SITEMAP</div>
                        <div className="footer-col-content">
                            <Link to="/">HOME</Link>
                        </div>
                        <div className="footer-col-content">
                            <Link to="/howto">HOWTO</Link>
                        </div>
                        <div className="footer-col-content">
                            <Link to="/newquestion">NEWQUESTION</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default FooterModule;
