import React,{useState} from 'react'
import { NavLink } from "react-router-dom"
import './Header.css'
import { Container, Row, Col, Table } from 'reactstrap';
import Login from './Login';
import Button from '@material-ui/core/Button';
import LoginModal from './Modal/LoginModal';
import ModalExample from './Modal/ModalExample';
const Header = () => {


    const handleLoginClick = () => {
        
    }

    const styleUnLoggined = {
        borderRadius: 3,
        border: '1',
        borderColor:'white',
        color: 'white',
      };

    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div class="logo-div">
            </div>
            <Container>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <NavLink to="/">
                    <img src="/img/topbar_logo_small2.png"></img>
                </NavLink>
                <div width="20"></div>
                <NavLink exact className="header-item" activeClassName="active" to="/">Home</NavLink>
                <NavLink className="header-item" activeClassName="active" to="/search">HowTo</NavLink>
                <NavLink className="header-item" activeClassName="active" to="/about/me">Crew</NavLink>
                <NavLink className="header-item" activeClassName="active" to="/posts">Musium</NavLink>
                <NavLink className="header-item" activeClassName="active" to="/mypage">OutSide</NavLink>
                <NavLink className="header-item" activeClassName="active" to="/todolist">Todo</NavLink>
                <NavLink className="header-item" activeClassName="active" to="/login">
                    <Button style={styleUnLoggined}>
                        <img width="20px" height="20px" src="/img/user_area_button.png"></img>
                        &nbsp;&nbsp;                    Sign In

                    </Button>
                </NavLink>
            </Container>

        </nav>
    );
}
export default Header;
