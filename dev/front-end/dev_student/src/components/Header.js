//import { NavLink } from "react-router-dom"
import './Header.css'
import { Container, Row, Col, Table } from 'reactstrap';
import Login from './Login';
import Button from '@material-ui/core/Button';
import LoginModal from './Modal/LoginModal';
import ModalExample from './Modal/ModalExample';
import React, { useState } from 'react';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const handleLoginClick = () => {
        
    }

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
                    <NavLink href="/" >Home</NavLink>
                    </div>
                </NavItem>
                <NavItem>
                <div className="nav-item-wrapper">
                    <NavLink href="/howto">HowTo</NavLink>
                    </div>
                </NavItem>
                <NavItem>
                <div className="nav-item-wrapper">
                    <NavLink href="/about/me">Crew</NavLink>
                    </div>
                </NavItem>
                <NavItem>
                <div className="nav-item-wrapper">
                    <NavLink href="/posts">Musium</NavLink>
                    </div>
                </NavItem>
                <NavItem>
                <div className="nav-item-wrapper">
                    <NavLink href="/mypage">OutSide</NavLink>
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