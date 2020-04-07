//import { NavLink } from "react-router-dom"
import './Header.css'
import { Container, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import React, { useState , useContext} from 'react';
import UserContext from '../../Context/UserContext';

import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem
} from 'reactstrap';
import Dropdownbutton from '../MypageButton/MypageDropdownButton';

const Header = (props) => {
    const {user,authenticated} = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const sign_style={
        justifyContent: 'flex-end',
        padding : "13px"
    }
    const img_style = {
        marginRight:'4px'
       };

    const GuestMenu =() =>{
        return (
            <div className="nav-item-wrapper" style={sign_style} >
            <Link to="/login">
            <img width="18px" height="20px" style={img_style} src="/img/user_area_button_black.png"></img>
            </Link>
    </div>
        );
    }

    const MemberMenu = () =>{
        return (
            <div style={sign_style}>
                <Dropdownbutton user={user}></Dropdownbutton>
            </div>
        );
    }

    const navBarInlineStyle = {
        padding : "0px"
    }

    const navbarItemTextStyle = {
        color : 'black'
    }

    const PrivateMenu = () =>{
        if(authenticated){
            return <MemberMenu/>
        }else{
            return <GuestMenu/>
        }
    }

      return (
            <Navbar style={navBarInlineStyle} color="black" light expand="md" className="header-wrapper sticky-top" >
            <Container>
            <NavbarToggler onClick={toggle} ></NavbarToggler>
                <NavbarBrand href="/" >
                    <img src="/img/devstu_text_logo_empty.png"></img>
                </NavbarBrand>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar >
                <NavItem>
                    <div className="nav-item-wrapper">
                    <Link to="/" className="nav-link">Home</Link>
                    </div>
                </NavItem>
                <NavItem>
                <div className="nav-item-wrapper">
                    <Link to="/howto" className="nav-link">Howto</Link>
                    </div>
                </NavItem>
                <NavItem>
                <div className="nav-item-wrapper">
                    <Link to="/about/me" className="nav-link">Crew</Link>
                    </div>
                </NavItem>
                <NavItem>
                <div className="nav-item-wrapper">
                    <Link to="/posts" className="nav-link">Museum</Link>
                    </div>
                </NavItem>
                <NavItem>
                <div className="nav-item-wrapper">
                    <Link to="/mypage" className="nav-link">Outside</Link>
                    </div>
                </NavItem>
                </Nav>
            </Collapse>
            <PrivateMenu></PrivateMenu>
            <div>
            </div>
            </Container>
            </Navbar>
    );
}
export default Header;