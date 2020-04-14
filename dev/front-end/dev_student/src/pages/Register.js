import React, { useState, useLayoutEffect } from "react";
import { Input } from "reactstrap";
import RegisterPageTemplate from "page-template/RegisterPageTemplate/RegisterPageTemplate";
import { CHECK_DUPLICATE_NICKNAME } from "mutation/mutations";
import { useMutation } from "react-apollo";

const Register = () => {
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePwd, setRePwd] = useState("");
    const [schoolName, setSchoolName] = useState("");
    const [nickName, setNickName] = useState("");
    const [checkDuplicateNickname, { data }] = useMutation(CHECK_DUPLICATE_NICKNAME);
    const [nickCheck, setNickCheck] = useState("false");
    const [pwdCheck, setPwdCheck] = useState("false");
    const [pwdRuleCheck, setPwdRuleCheck] = useState("false");
    const [rePwdClassName, setRePwdClassName] = useState("");
    const [emailRuelCheck, setEmailRuleCheck] = useState("false");
    const [pwdClassName, setPwdClassName] = useState("");
    const [emailSelect, setEmailSelect] = useState("@gmail.com");

    //닉네임 중복체크
    useLayoutEffect(() => {
        if (data == null) return;
        if (data.checkDuplicateNickname.count === 0) {
            alert("중복된 닉네임 입니다.");
            setNickCheck("false");
            return;
        } else {
            alert("사용 가능한 닉네임 입니다.");
            setNickCheck("true");
        }
    }, [data]);

    const passwordRule = () => {
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
            checkDuplicateNickname={checkDuplicateNickname}
            nickCheck={nickCheck}
            pwdCheck={pwdCheck}
            setRePwdClassName={setRePwdClassName}
            setPwdCheck={setPwdCheck}
            pwdRuleCheck={pwdRuleCheck}
            setPwdRuleCheck={setPwdRuleCheck}
            rePwdClassName={rePwdClassName}
            pwdClassName={pwdClassName}
            emailRuelCheck={emailRuelCheck}
            setEmailRuleCheck={setEmailRuleCheck}
            emailSelect={emailSelect}
            setEmailSelect={setEmailSelect}
        ></RegisterPageTemplate>
    );
};
export default Register;
