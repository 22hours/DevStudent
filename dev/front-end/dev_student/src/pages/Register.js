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
    const [rePwdClassName, setRePwdClassName] = useState("is-invalid");
    const [emailRuelCheck, setEmailRuleCheck] = useState("false");
    const [pwdClassName, setPwdClassName] = useState("is-invalid");

    //닉네임 중복체크
    useLayoutEffect(() => {
        if (data == null) return;
        if (data.checkDuplicateNickname.count === 0) {
            alert("중복된 닉네임 입니다.");
            return;
        } else {
            alert("사용 가능한 닉네임 입니다.");
            setNickCheck("true");
        }
    }, [data]);

    //비밀번호 확인용
    const RepwInputRenderer = () => {
        if (password !== rePwd) {
            setRePwdClassName("is-invalid");
            alert("비밀번호가 일치하지 않습니다.");
            return rePwdClassName;
        } else {
            setPwdCheck("true");
            setRePwdClassName("is-valid");
            return rePwdClassName;
        }
    };

    const passwordRule = () => {
        var num = password.search(/[0-9]/g);
        var eng = password.search(/[a-z]/gi);
        var spe = password.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
        if (password.length < 8 || password.length > 15) {
            alert("8자리~ 15자리 이내로 입력해주세요.");
            setPwdClassName("is-invalid");
            return;
        }
        if (password.search(/₩s/) !== -1) {
            alert("비밀번호는 공백없이 입력해주세요.");
            setPwdClassName("is-invalid");
            return;
        }
        if (num < 0 || eng < 0 || spe < 0) {
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
            RepwInputRenderer={RepwInputRenderer}
            passwordRule={passwordRule}
            checkDuplicateNickname={checkDuplicateNickname}
            nickCheck={nickCheck}
            pwdCheck={pwdCheck}
            pwdRuleCheck={pwdRuleCheck}
            setPwdRuleCheck={setPwdRuleCheck}
            setPwdCheck={setPwdCheck}
            rePwdClassName={rePwdClassName}
            pwdClassName={pwdClassName}
            emailRuelCheck={emailRuelCheck}
            setEmailRuleCheck={setEmailRuleCheck}
        ></RegisterPageTemplate>
    );
};
export default Register;
