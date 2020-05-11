import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import RegisterPageTemplate from "page-template/RegisterPageTemplate/RegisterPageTemplate";

const Register = ({ location }) => {
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePwd, setRePwd] = useState("");
    const [schoolName, setSchoolName] = useState("");
    const [nickName, setNickName] = useState("");
    const [pwdCheck, setPwdCheck] = useState("false");
    const [pwdRuleCheck, setPwdRuleCheck] = useState("false");
    const [rePwdClassName, setRePwdClassName] = useState("");
    const [pwdClassName, setPwdClassName] = useState("");
    const [emailSelect, setEmailSelect] = useState("@gmail.com");
    const [emailAuthState, setEmailAuthState] = useState("");

    const passwordRule = () => {
        if (password.length < 1) return;
        var num = password.search(/[0-9]/g);
        var eng = password.search(/[a-z]/gi);
        var spe = password.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
        if (password.length < 8 || password.length > 15) {
            alert("8자리~ 15자리 이내로 입력해주세요.");
            setPwdRuleCheck("false");
            setPwdClassName("is-invalid");
            return;
        }
        if (password.search(/₩s/) !== -1) {
            alert("비밀번호는 공백없이 입력해주세요.");
            setPwdRuleCheck("false");
            setPwdClassName("is-invalid");
            return;
        }
        if (num < 0 || eng < 0 || spe < 0) {
            setPwdRuleCheck("false");
            alert("영문,숫자, 특수문자를 혼합하여 입력해주세요.");
            setPwdClassName("is-invalid");
            return;
        } else {
            setPwdRuleCheck("true");
            setPwdClassName("is-valid");
        }
    };

    const auth = localStorage.getItem("auth");
    const { from } = location.state || { from: { pathname: "/" } };
    if (auth) return <Redirect to={from} />;

    return (
        <RegisterPageTemplate
            email={userEmail}
            setEmail={setUserEmail}
            password={password}
            setPassword={setPassword}
            rePwd={rePwd}
            setRePwd={setRePwd}
            nickName={nickName}
            setNickName={setNickName}
            schoolName={schoolName}
            setSchoolName={setSchoolName}
            passwordRule={passwordRule}
            pwdCheck={pwdCheck}
            setRePwdClassName={setRePwdClassName}
            setPwdCheck={setPwdCheck}
            pwdRuleCheck={pwdRuleCheck}
            setPwdRuleCheck={setPwdRuleCheck}
            rePwdClassName={rePwdClassName}
            pwdClassName={pwdClassName}
            emailSelect={emailSelect}
            setEmailSelect={setEmailSelect}
            emailAuthState={emailAuthState}
            setEmailAuthState={setEmailAuthState}
        ></RegisterPageTemplate>
    );
};
export default Register;
