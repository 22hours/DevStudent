import React from 'react'
import {NavLink} from 'react-router-dom'
import { Container, Col} from 'reactstrap';
const Login = () =>{
    return(
        <Container>
            <Col>
        <NavLink to="/">Sign In</NavLink>
        </Col>
        <Col>
        <NavLink to="/">Sign UP</NavLink>
        </Col>
        </Container>
    );
}

export default Login;