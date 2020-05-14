import React, { useState, useEffect } from "react";
import "./NewHeaderComponent.css";
import { Container, Collapse } from "reactstrap";
import { Link } from "react-router-dom";
import AlarmBadgeItem from "item/AlarmBadgeItem/AlarmBadgeItem";
import MypageDropdownButtonModule from "module/MypageDropdownButtonModule/MypageDropdownButtonModule";

// icon
import MenuIcon from "@material-ui/icons/Menu";

//imgs
import mobile_logo from "img/header/mobile-logo.png";
import mobile_text_logo from "img/header/mobile-text-logo.png";
import devstu_text_logo_empty from "img/footer/devstu_text_logo_empty.png";

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
    const [clicked, setClicked] = useState("");
    const [isOpen, setIsOpen] = useState(true);
    const [scroll, setScroll] = useState(0);
    const toggle = () => setIsOpen(!isOpen);
    const handleScroll = (event) => {
        if (location.pathname.split("/")[1] !== "") return;
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;
        // setScroll(scrollPosition);

        var element = document.getElementById("pc-header");
        if (scrollPosition === 0) {
            element.classList.remove("none");
            element.classList.add("zero");
        } else {
            element.classList.remove("zero");
            element.classList.add("none");
        }
    };

    // + (clicked === "" && scroll === 0 ? "zero" : "none")}
    useEffect(() => {
        // 현재 위치에 불 켜기
        setClicked(location.pathname.split("/")[1]);
        var element = document.getElementById("pc-header");

        if (location.pathname.split("/")[1] === "") {
            element.classList.remove("none");
            element.classList.remove("zero");
            element.classList.add("zero");
        } else {
            element.classList.remove("none");
            element.classList.remove("zero");
            element.classList.add("none");
        }
        // collapse 무조건 끄기
        setIsOpen(false);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    const UserArea = () => {
        if (nickname) {
            return (
                <div>
                    <AlarmBadgeItem /> &nbsp;
                    <MemberArea />
                </div>
            );
        } else {
        }
        return (
            <div className="user-outter">
                <GuestArea />
            </div>
        );
    };

    return (
        <div className={"NewHeaderComponent"}>
            <div id="pc-header" className={"header-wrapper pc-only"}>
                <Container>
                    <Link to="/">
                        <div className="header-logo-col">
                            <div className="img-box">
                                <img
                                    id="brand-img"
                                    src={
                                        clicked === "" && scroll === 0
                                            ? "/img/devstu_text_logo_empty_white.png"
                                            : "/img/devstu_text_logo_empty.png"
                                    }
                                ></img>
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
            </div>
            <div className="header-wrapper-mobile mobile-only">
                <div className="header-menu-col" onClick={() => toggle()}>
                    <MenuIcon style={{ fontSize: "35px", marginTop: "7px" }} />
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
            <div className="mobile-menu-collapse">
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
                        <div className={"collapse-item-outter " + (clicked === "issue" ? "mobile-on" : "mobile-off")}>
                            <Link to="/issue">
                                <div className="collapse-item-inner">Issues</div>
                            </Link>
                        </div>
                    </div>
                </Collapse>
            </div>
        </div>
    );
};

export default NewHeaderComponent;
