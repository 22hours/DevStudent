import "./HeaderComponent.css";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { setAuthInfo, getAuthInfo } from "auth";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from "reactstrap";

// module
import MypageDropdownButtonModule from "module/MypageDropdownButtonModule/MypageDropdownButtonModule";

// icons
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const HeaderComponent = ({ nickname }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [clicked, setClicked] = useState("home");
    const toggle = () => setIsOpen(!isOpen);
    const [linkClick, setLinkClick] = useState(false);
    const sign_style = {
        justifyContent: "flex-end",
        padding: "10px",
    };

    const LinkClick = () => {
        console.log("nav bar toggle");
        toggle();
        setLinkClick(true);
    };

    const GuestMenu = () => {
        return (
            <div className="nav-item-wrapper" style={sign_style}>
                <Link to="/login">
                    <ExitToAppIcon style={{ verticalAlign: "middle", fontSize: "18px", color: "gray" }} />
                </Link>
            </div>
        );
    };

    const MemberMenu = () => {
        return (
            <div style={sign_style}>
                <MypageDropdownButtonModule user={nickname}></MypageDropdownButtonModule>
            </div>
        );
    };

    const navBarInlineStyle = {
        padding: "0px",
    };

    const PrivateMenu = ({ nickname }) => {
        if (nickname) {
            return <MemberMenu />;
        } else {
            return <GuestMenu />;
        }
    };

    return (
        <Navbar style={navBarInlineStyle} color="black" light expand="md" className="header-wrapper sticky-top">
            <Container>
                <NavbarToggler style={{ marginLeft: "3px", fontSize: "12px" }} onClick={toggle}></NavbarToggler>
                <div className="header-brand-box" onClick={() => (window.location.href = "/")}>
                    <img id="brand-img" src="/img/devstu_text_logo_empty.png"></img>
                </div>
                <Collapse style={{ lineHeight: "0px" }} isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <div className="nav-item-wrapper">
                                <Link
                                    to="/"
                                    className={"nav-link " + (clicked === "home" ? "selected " : "unselected")}
                                    onClick={() => setClicked("home")}
                                >
                                    Home
                                </Link>
                            </div>
                        </NavItem>
                        <NavItem>
                            <div className="nav-item-wrapper">
                                <Link
                                    to="/howto"
                                    className={"nav-link " + (clicked === "howto" ? "selected " : "unselected")}
                                    onClick={() => setClicked("howto")}
                                >
                                    Howto
                                </Link>
                            </div>
                        </NavItem>
                        <NavItem>
                            <div className="nav-item-wrapper">
                                <Link
                                    to="/rule"
                                    className={"nav-link " + (clicked === "crew" ? "selected " : "unselected")}
                                    onClick={() => setClicked("crew")}
                                >
                                    Rule
                                </Link>
                            </div>
                        </NavItem>
                        <NavItem>
                            <div className="nav-item-wrapper">
                                <Link
                                    to="/posts"
                                    className={"nav-link " + (clicked === "posts" ? "selected " : "unselected")}
                                    onClick={() => setClicked("posts")}
                                >
                                    Museum
                                </Link>
                            </div>
                        </NavItem>
                        <NavItem>
                            <div className="nav-item-wrapper">
                                <Link
                                    to="/mypage"
                                    className={"nav-link " + (clicked === "mypage" ? "selected " : "unselected")}
                                    onClick={() => setClicked("mypage")}
                                >
                                    Outside
                                </Link>
                            </div>
                        </NavItem>
                        <NavItem>
                            <div className="nav-item-wrapper">
                                <Link
                                    to="/devnote"
                                    className={"nav-link " + (clicked === "devnote" ? "selected " : "unselected")}
                                    onClick={() => setClicked("devnote")}
                                >
                                    DevNote
                                </Link>
                            </div>
                        </NavItem>
                    </Nav>
                </Collapse>
                <PrivateMenu nickname={nickname}></PrivateMenu>

                <div></div>
            </Container>
        </Navbar>
    );
};
export default HeaderComponent;
