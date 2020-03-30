//import { NavLink } from "react-router-dom"
import './Header.css'
import { Container} from 'reactstrap';
import AuthDebug from '../components/Debug/AuthDebug';
import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const {user, authenticated} = props;

    const sign_style={
        justifyContent: 'flex-end'
    }

    const img_style = {
       marginRight:'4px'
      };
    
      return (
          
            <Navbar color="light" light expand="md" className="header-wrapper sticky-top" >
            <Container>
            <NavbarToggler onClick={toggle} ></NavbarToggler>
                <NavbarBrand href="/" >
                    <img src="/img/devstu_text_logo.png"></img>
                </NavbarBrand>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                <NavItem>
                    <div className="nav-item-wrapper">
                    <Link to="/" className="nav-link">Home</Link>
                    </div>
                </NavItem>
                <NavItem>
                <div className="nav-item-wrapper">
                    <Link to="/howto" className="nav-link">HowTo</Link>
                    </div>
                </NavItem>
                <NavItem>
                <div className="nav-item-wrapper">
                    <Link to="/about/me" className="nav-link">Crew</Link>
                    </div>
                </NavItem>
                <NavItem>
                <div className="nav-item-wrapper">
                    <Link to="/posts" className="nav-link">Musium</Link>
                    </div>
                </NavItem>
                <NavItem>
                <div className="nav-item-wrapper">
                    <Link to="/mypage" className="nav-link">OutSide</Link>
                    </div>
                </NavItem>
                <NavItem>
                <div className="nav-item-wrapper">
                    <AuthDebug user={user} authenticated={authenticated}></AuthDebug>
                </div>
                </NavItem>
                </Nav>
            </Collapse>
            <div className="nav-item-wrapper" style={sign_style} >
                    <NavLink href="/login">
                    <img width="18px" height="20px" style={img_style} src="/img/user_area_button_black.png"></img>
                    </NavLink>
                </div>
            </Container>
            </Navbar>
    );
}
export default Header;