import React, { useState, useRef, useLayoutEffect } from "react";
import { Redirect } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN } from "mutation/mutations";
import { setAuthInfo, getAuthInfo } from "auth";
import LoginPageTemplate from "page-template/LoginPageTemplate/LoginPageTemplate";
import NicknamePageTemplate from "page-template/NicknamePageTemplate/NicknamePageTemplate";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Login = ({ logIn, location }) => {
    const [loginToServer, { data }] = useMutation(LOGIN);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const btn_style = {
        backgroundColor: "#4BA0B5",
        color: "white",
        fontSize: "16px",
    };
    const modal_style = {
        padding: "10px",
        paddingLeft: "15px",
    };

    const modal_header_style = {
        paddingTop: "10px",
        paddingBottom: "10px",
        fontSize: "16px",
    };

    const modal_btn_style = {
        padding: "3px",
    };
    const { auth } = getAuthInfo();
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const AlertModal = () => {
        return (
            <Modal isOpen={modal}>
                <ModalHeader style={modal_header_style}>
                    <b>닉네임 설정</b>
                </ModalHeader>
                <ModalBody style={modal_style}>닉네임을 설정해주세요.</ModalBody>
                <ModalFooter style={modal_btn_style}>
                    <Link to="/nickname">
                        <Button color="info">확인</Button>
                    </Link>
                </ModalFooter>
            </Modal>
        );
    };

    const firstUpdate = useRef(true);
    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        if (data == null) return;

        // if (data?.loginToServer.accessToken & data.loginToServer.nickname) {
        //     logIn(data.loginToServer.nickname, email, data.loginToServer.accessToken, data.loginToServer.refreshToken);
        //     return;
        // }
        if (data?.loginToServer.nickname) {
            logIn(data.loginToServer.nickname, email, data.loginToServer.accessToken, data.loginToServer.refreshToken);
        } else if (data.loginToServer.accessToken) {
            window.sessionStorage.setItem("token", data.loginToServer.accessToken);
            window.sessionStorage.setItem("email", data.loginToServer.email);
            setPassword("");
            // window.location.replace("/nickname/setting");
            toggle();
        } else {
            setPassword("");
            alert("로그인 시스템의 정보와 다릅니다!");
            return;
        }
    }, [data]);

    const { from } = location.state || { from: { pathname: "/" } };
    if (auth) return <Redirect to={from} />;

    return (
        <React.Fragment>
            <LoginPageTemplate
                logIn={logIn}
                authenticated={auth}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                email={email}
                loginToServer={loginToServer}
                btn_style={btn_style}
            />
            <AlertModal />
        </React.Fragment>
    );
};

export default Login;
