import "./HeaderComponent.css";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from "reactstrap";

// module
import MypageDropdownButtonModule from "module/MypageDropdownButtonModule/MypageDropdownButtonModule";

const HeaderComponent = ({ nickname, location }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [clicked, setClicked] = useState("home");
    const toggle = () => setIsOpen(!isOpen);
    const sign_style = {
        justifyContent: "flex-end",
        padding: "10px",
    };

    useEffect(() => {
        console.log(location.pathname);
        setClicked(location.pathname.split("/")[1]);
    }, [location.pathname]);
    const GuestMenu = () => {
        return (
            <div className="nav-item-wrapper" style={sign_style}>
                <Link to="/login">
                    <img
                        src="/img/login_logo.png"
                        style={{ verticalAlign: "middle", fontSize: "20px", color: "gray" }}
                    ></img>
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
        // if (nickname) {
        //     return <MemberMenu />;
        // } else {
        //     return <GuestMenu />;
        // }
        return <GuestMenu />;
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
                                <Link to="/" className={"nav-link " + (clicked === "" ? "selected " : "unselected")}>
                                    Home
                                </Link>
                            </div>
                        </NavItem>
                        <NavItem>
                            <div className="nav-item-wrapper">
                                <a
                                    href="/howto"
                                    className={"nav-link " + (clicked === "howto" ? "selected " : "unselected")}
                                >
                                    Howto
                                </a>
                            </div>
                        </NavItem>
                        <NavItem>
                            <div className="nav-item-wrapper">
                                <Link
                                    to="/rule"
                                    className={"nav-link " + (clicked === "crew" ? "selected " : "unselected")}
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
                                >
                                    Museum
                                </Link>
                            </div>
                        </NavItem>
                        <NavItem>
                            <div className="nav-item-wrapper">
                                <Link
                                    to="/mypage"
                                    className={"nav-link " + (clicked === "outside" ? "selected " : "unselected")}
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
                                >
                                    DevNote
                                </Link>
                            </div>
                        </NavItem>
                        <NavItem>
                            <div className="nav-item-wrapper">
                                <Link
                                    to="/emailCheck/123456"
                                    className={"nav-link " + (clicked === "devnote" ? "selected " : "unselected")}
                                >
                                    email
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
