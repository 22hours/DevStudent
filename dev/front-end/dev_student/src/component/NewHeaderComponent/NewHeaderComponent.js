import React, { useState, useEffect } from "react";
import "./NewHeaderComponent.css";
import { Container, Collapse } from "reactstrap";
import { Link } from "react-router-dom";

import MypageDropdownButtonModule from "module/MypageDropdownButtonModule/MypageDropdownButtonModule";

// icon
import MenuIcon from "@material-ui/icons/Menu";

//imgs
import mobile_logo from "img/header/mobile-logo.png";
import mobile_text_logo from "img/header/mobile-text-logo.png";

const MemberArea = () => {
    return <MypageDropdownButtonModule />;
};

const GuestArea = () => {
    return (
        <React.Fragment>
            <Link to="/login">로그인</Link>&nbsp;
            <span>|</span>&nbsp;
            <Link to="/register">회원가입</Link>
        </React.Fragment>
    );
};

const NewHeaderComponent = ({ nickname, location }) => {
    const [clicked, setClicked] = useState("home");
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        // 현재 위치에 불 켜기
        setClicked(location.pathname.split("/")[1]);

        // collapse 무조건 끄기
        setIsOpen(false);
    }, [location.pathname]);

    const UserArea = () => {
        // if (nickname) {
        // } else {
        // }
        // return (
        //     <div className="user-outter">
        //         <GuestArea nickname={"winterlood"} handleNicknameClick={handleNicknameClick} />
        //     </div>
        // );
        return (
            <div className="user-outter">
                <MemberArea nickname={"winterlood"} />
            </div>
        );
    };
    return (
        <div className="NewHeaderComponent">
            <Container className="header-wrapper pc-only">
                <Link to="/">
                    <div className="header-logo-col">
                        <div className="img-box">
                            <img id="brand-img" src="/img/devstu_text_logo_empty.png"></img>
                        </div>
                    </div>
                </Link>
                <div className="header-menu-col">
                    <div className="menu-outter">
                        <div className={"menu-box " + (clicked === "" ? "on" : "off")}>
                            <Link to="/" className="menu-item">
                                Home
                            </Link>
                        </div>
                        <div className={"menu-box " + (clicked === "howto" ? "on" : "off")}>
                            <Link to="/howto" className="menu-item">
                                HowTo
                            </Link>
                        </div>
                        <div className={"menu-box " + (clicked === "rule" ? "on" : "off")}>
                            <Link to="/rule" className="menu-item">
                                Rule
                            </Link>
                        </div>
                        <div className={"menu-box " + (clicked === "devnote" ? "on" : "off")}>
                            <Link to="/devnote" className="menu-item">
                                DevNote
                            </Link>
                        </div>
                        <div className={"menu-box " + (clicked === "issue" ? "on" : "off")}>
                            <Link to="/issue" className="menu-item">
                                Issues
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="header-user-col">
                    <UserArea />
                </div>
            </Container>
            <div className="header-wrapper-mobile mobile-only">
                <div className="header-menu-col" onClick={() => toggle()}>
                    <MenuIcon />
                </div>

                <div className="header-logo-col">
                    <div className="img-box">
                        <img id="mobile-logo" src={mobile_text_logo}></img>
                    </div>
                </div>

                <div className="header-user-col">
                    <UserArea />
                </div>
            </div>
            <Collapse isOpen={isOpen}>
                <div className="collapse-wrapper">
                    <div className={"collapse-item-outter " + (clicked === "" ? "mobile-on" : "mobile-off")}>
                        <Link to="/">
                            <div className="collapse-item-inner">Home</div>
                        </Link>
                    </div>
                    <div className={"collapse-item-outter " + (clicked === "howto" ? "mobile-on" : "mobile-off")}>
                        <Link to="/howto">
                            <div className="collapse-item-inner">HowTo</div>
                        </Link>
                    </div>
                    <div className={"collapse-item-outter " + (clicked === "rule" ? "mobile-on" : "mobile-off")}>
                        <Link to="/rule">
                            <div className="collapse-item-inner">Rule</div>
                        </Link>
                    </div>
                    <div className={"collapse-item-outter " + (clicked === "devnote" ? "mobile-on" : "mobile-off")}>
                        <Link to="/devnote">
                            <div className="collapse-item-inner">DevNote</div>
                        </Link>
                    </div>
                </div>
            </Collapse>
        </div>
    );
};

export default NewHeaderComponent;
