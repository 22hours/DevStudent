import React, { useState } from "react";
import { Input } from "reactstrap";
import RegisterPageTemplate from "page-template/RegisterPageTemplate/RegisterPageTemplate";

const Register = () => {
    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repwd, setRepwd] = useState("");
    const [schoolName, setSchoolName] = useState("");
    const [nickName, setNickName] = useState("");

    const RepwInputRenderer = () => {
        if (password === repwd) {
            return (
                <Input
                    value={repwd}
                    onChange={({ target: { value } }) => setRepwd(value)}
                    valid
                    type="password"
                    name="password"
                    id="passwordCheck"
                    placeholder="password check"
                />
            );
        } else {
            return (
                <Input
                    value={repwd}
                    onChange={({ target: { value } }) => setRepwd(value)}
                    invalid
                    type="password"
                    name="password"
                    id="passwordCheck"
                    placeholder="password check"
                />
            );
        }
    };
    return (
        <RegisterPageTemplate
            email={userEmail}
            setEmail={setUserEmail}
            password={password}
            setPassword={setPassword}
            nickName={nickName}
            setNickName={setNickName}
            schoolName={schoolName}
            setSchoolName={setSchoolName}
            RepwInputRenderer={RepwInputRenderer}
        ></RegisterPageTemplate>
    );
};
export default Register;
