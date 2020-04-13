import React, { useState, useRef, useLayoutEffect } from "react";
import { Redirect } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN } from "mutation/mutations";
import LoginPageTemplate from "page-template/LoginPageTemplate/LoginPageTemplate";
const Login = ({ saveLoginState, authenticated, location }) => {
    const [loginToServer, { data }] = useMutation(LOGIN);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const btn_style = {
        backgroundColor: "#4BA0B5",
        color: "white",
    };
    const firstUpdate = useRef(true);
    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        if (data == null) return;
        if (data?.loginToServer.token) {
            saveLoginState(data.loginToServer.nickname, data.loginToServer.token);
            return;
        } else {
            setPassword("");
            alert("로그인 시스템의 정보와 다릅니다!");
            return;
        }
    }, [data]);

    const { from } = location.state || { from: { pathname: "/" } };
    if (authenticated) return <Redirect to={from} />;

    return (
        <React.Fragment>
            <LoginPageTemplate
                saveLoginState={saveLoginState}
                authenticated={authenticated}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                email={email}
                loginToServer={loginToServer}
                btn_style={btn_style}
            />
        </React.Fragment>
    );
};

export default Login;
