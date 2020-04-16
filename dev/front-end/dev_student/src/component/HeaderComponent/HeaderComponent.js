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
    const toggle = () => setIsOpen(!isOpen);
    const sign_style = {
        justifyContent: "flex-end",
        padding: "13px",
    };
    const img_style = {
        marginRight: "4px",
    };

    const GuestMenu = () => {
        return (
            <div className="nav-item-wrapper" style={sign_style}>
                <Link to="/login">
                    <ExitToAppIcon style={{ color: "gray" }} />
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
                <NavbarToggler onClick={toggle}></NavbarToggler>
                <NavbarBrand href="/">
                    <img src="/img/devstu_text_logo_empty.png"></img>
                </NavbarBrand>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <div className="nav-item-wrapper">
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </div>
                        </NavItem>
                        <NavItem>
                            <div className="nav-item-wrapper">
                                <Link to="/howto" className="nav-link">
                                    Howto
                                </Link>
                            </div>
                        </NavItem>
                        <NavItem>
                            <div className="nav-item-wrapper">
                                <Link to="/about/me" className="nav-link">
                                    Crew
                                </Link>
                            </div>
                        </NavItem>
                        <NavItem>
                            <div className="nav-item-wrapper">
                                <Link to="/posts" className="nav-link">
                                    Museum
                                </Link>
                            </div>
                        </NavItem>
                        <NavItem>
                            <div className="nav-item-wrapper">
                                <Link to="/mypage" className="nav-link">
                                    Outside
                                </Link>
                            </div>
                        </NavItem>
                        <NavItem>
                            <div className="nav-item-wrapper">
                                <Link to="/devnote" className="nav-link">
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
