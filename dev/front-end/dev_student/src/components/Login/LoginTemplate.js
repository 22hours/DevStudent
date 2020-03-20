import React from 'react';
import { Container, Col, Row, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './LoginTemplate.css';
import FormControl from '@material-ui/core/FormControl';
import {Paper ,TextField, Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
const LoginTemplate = () => {
    return (
        <React.Fragment>
            <div className="login-container-top-wrapper">
                <Container className="login-container-wrapper">
                    <div className="login-container-header-area">
                        <Row>
                            <Col></Col>
                            <Col>
                                <span className="login-title">DevStudent</span>
                            </Col>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col></Col>
                            <Col>
                                <span className="login-title-span">SIGN IN</span>
                            </Col>
                            <Col></Col>
                        </Row>
                    </div>
                    <Row>
                        <Col></Col>
                        <Col>
                            <span className="login-title-span">devstudent</span>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row className="bottom-border">
                    </Row>
                    <Row>
                    <Col xs={3}></Col>
                        <Col xs={6}>
                        <div className="login-email-input-wrapper">
                            <TextField
                                required
                                id="outlined-required"
                                label="Email"
                                variant="outlined"
                            />
                            </div>
                        </Col>
                        <Col xs={3}></Col>
                    </Row>
                    <Row>
                        <Col xs={3}></Col>
                        <Col xs={6}>
                        <div className="login-password-input-wrapper">
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                variant="outlined"
                            />
                            </div>
                        </Col>
                        <Col xs={3}>
                        </Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col>
                        <Link to="/">Forgot Password?</Link>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                    <Col xs={3}></Col>
                        <Col xs={6}>
                        <Button className="button-login" variant="contained" color="primary">Sign In</Button>       
                        </Col>
                        <Col xs={3}>
                        </Col>
                    </Row>
                    <Row className="bottom-border-row">
                    <Col></Col>
                        <Col>
                        <span className="signup-text">&nbsp;</span>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row className="bottom-border">
                    </Row>
                    
                    <Row >
                    <Col xs={3}></Col>
                        <Col xs={6}>
                        <Button className="button-login" variant="contained" color="default">Sign Up</Button>       
                        </Col>
                        <Col xs={3}></Col>
                    </Row>
 
                    
                </Container>
            </div>
        </React.Fragment>
    );
}

export default LoginTemplate;