import React, { useState, useEffect } from "react";
import "./NewHeaderComponent.css";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

// icon
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const MemberArea = ({ nickname, handleNicknameClick }) => {
    return (
        <span id="nickname-span" onClick={handleNicknameClick}>
            {nickname}
            <ArrowDropDownIcon />
        </span>
    );
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

    useEffect(() => {
        // 현재 위치에 불 켜기
        setClicked(location.pathname.split("/")[1]);
    }, [location.pathname]);

    const handleNicknameClick = () => {
        alert("show!");
    };

    const UserArea = () => {
        // if (nickname) {
        // } else {
        // }
        return (
            <div className="user-outter">
                <MemberArea nickname={"winterlood"} handleNicknameClick={handleNicknameClick} />
            </div>
        );
    };
    return (
        <div className="NewHeaderComponent">
            <Container className="header-wrapper pc-only">
                <div className="header-logo-col">
                    <div className="img-box">
                        <img id="brand-img" src="/img/devstu_text_logo_empty.png"></img>
                    </div>
                </div>
                <div className="header-menu-col">
                    <div className="menu-outter">
                        <div className="menu-box">
                            <Link to="/" className={"menu-item " + (clicked === "" ? "on" : "off")}>
                                Home
                            </Link>
                        </div>
                        <div className="menu-box">
                            <Link to="/howto" className={"menu-item " + (clicked === "howto" ? "on" : "off")}>
                                HowTo
                            </Link>
                        </div>
                        <div className="menu-box">
                            <Link to="/devnote" className={"menu-item " + (clicked === "devnote" ? "on" : "off")}>
                                DevNote
                            </Link>
                        </div>
                        <div className="menu-box">
                            <Link to="/devnote" className={"menu-item " + (clicked === "devnote" ? "on" : "off")}>
                                DevNote
                            </Link>
                        </div>
                        <div className="menu-box">
                            <Link to="/devnote" className={"menu-item " + (clicked === "devnote" ? "on" : "off")}>
                                DevNote
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="header-user-col">
                    <UserArea />
                </div>
            </Container>
            <Container className="header-wrapper mobile-only">
                <div className="header-logo-col">1</div>
                {/* <div className="header-menu-col">2</div> */}
                <div className="header-button-col">3</div>
            </Container>
        </div>
    );
};

export default NewHeaderComponent;
