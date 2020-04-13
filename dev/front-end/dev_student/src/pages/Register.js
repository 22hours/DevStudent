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

    const RepwInputRenderer = () => {
        if (password !== rePwd) {
            return (
                <Input
                    invalid
                    value={rePwd}
                    onChange={({ target: { value } }) => setRePwd(value)}
                    type="password"
                    name="password"
                    id="inputPassword"
                    placeholder="password"
                    onBlur={RepwInputRenderer}
                />
            );
        } else {
            setPwdCheck("true");
            return <div>pwd 확인</div>;
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
            checkDuplicateNickname={checkDuplicateNickname}
            nickCheck={nickCheck}
            pwdCheck={pwdCheck}
            pwdRuleCheck={pwdRuleCheck}
            setPwdRuleCheck={setPwdRuleCheck}
            setPwdCheck={setPwdCheck}
        ></RegisterPageTemplate>
    );
};
export default Register;
