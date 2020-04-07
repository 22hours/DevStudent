import React, { useState  , useRef, useLayoutEffect } from 'react';
import '../components/Login/LoginTemplate.css';
import { Redirect } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import { TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from '../Mutation/mutations';

const Login = ({ saveLoginState, authenticated, location }) => {
    const [loginToServer, { data }] = useMutation(LOGIN);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const btn_style={
        backgroundColor:'#4BA0B5',
        color: 'white'
    }
    const firstUpdate = useRef(true);
    useLayoutEffect(() => {
        if (firstUpdate.current) {
          firstUpdate.current = false;
          return;
        }
        if(data == null)return;
        if(data?.loginToServer.token){
            saveLoginState(data.loginToServer.nickname,data.loginToServer.token);
            return ;
        }
        else {
            setPassword('');
            alert("로그인 시스템의 정보와 다릅니다!");
            return ;
        };
    },[data]);



    const { from } = location.state || { from: { pathname: "/" } };
    if (authenticated) return <Redirect to={from} />;
    
    return (
        <React.Fragment>
            <div className="login-container-top-wrapper">
                <Container >
                    <Row>
                        <Col xs={2}></Col>
                        <Col xs={8} className="login-container-wrapper">
                            <div className="login-welcome-wrapper" >
                                <span className="login-welcome-span">WELCOME</span>
                            </div>
                            <div className="login-logo_wrapper" >
                                <img src="/img/devstu_round_logo.png"></img>
                            </div>
                            <div className="login-form-wrapper" >
                                <div className="login-form-resize-wrapper">
                                    <TextField
                                        value={email}
                                        onChange={({ target: { value } }) => setEmail(value)}

                                        width="100%" id="standard-basic" label="이메일 주소" />
                                </div>
                            </div>
                            <div className="login-form-wrapper" >
                                <div className="login-form-resize-wrapper">
                                    <TextField
                                        value={password}
                                        onChange={({ target: { value } }) => setPassword(value)}
                                        id="standard-password-input"
                                        label="비밀번호"
                                        type="password"
                                        autoComplete="current-password"
                                    />
                                </div>
                            </div>
                            <div className="login-form-wrapper" >
                                <div className="login-form-resize-wrapper">
                                    <Button
                                        onClick={() => {
                                            if(email.length < 1)return;
                                            if(password.length < 1)return;
                                            loginToServer({variables : {
                                                email : email,
                                                password : password
                                            }})
                                        }}
                                        variant="contained" style={btn_style}>
                                        login
                                    </Button>
                                </div>
                            </div>
                            <div className="login-form-wrapper" >
                                <div className="login-form-resize-wrapper">
                                    <span>아직 계정이 없으신가요?<br /></span>
                                    <Link to="/register">회원가입</Link>
                                </div>
                            </div>
                        </Col>
                        <Col xs={2}></Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default Login;