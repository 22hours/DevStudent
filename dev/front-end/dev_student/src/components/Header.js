//import { NavLink } from "react-router-dom"
import './Header.css'
import { Container, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import AuthDebug from '../components/Debug/AuthDebug';
import {Link} from 'react-router-dom';
import React, { useState , useContext} from 'react';
import UserContext from '../Context/UserContext';

import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';
import Dropdownbutton from './MypageButton/MypageDropdownButton';

const Header = (props) => {
    const {user,authenticated} = useContext(UserContext);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const sign_style={
        justifyContent: 'flex-end'
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
            <div>
            <Dropdownbutton user={user}></Dropdownbutton>
        </div>
        );
    }

    const PrivateMenu = () =>{
        if(authenticated){
            return <MemberMenu/>
        }else{
            return <GuestMenu/>
        }
    }
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
                    <Link to="/posts" className="nav-link">뮤지엄</Link>
                    </div>
                </NavItem>
                <NavItem>
                <div className="nav-item-wrapper">
                    <Link to="/mypage" className="nav-link">OutSide</Link>
                    </div>
                </NavItem>
                <NavItem>
                <div className="nav-item-wrapper">
                    <AuthDebug ></AuthDebug>
                </div>
                </NavItem>
                </Nav>
            </Collapse>
            <div>
                <PrivateMenu></PrivateMenu>
            </div>
            <div>
            </div>
            </Container>
            </Navbar>
    );
}
export default Header;