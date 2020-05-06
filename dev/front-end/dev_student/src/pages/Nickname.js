import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import NicknamePageTemplate from "page-template/NicknamePageTemplate/NicknamePageTemplate";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_NICKNAME } from "mutation/mutations";
import { useEffect } from "react";

const Nickname = ({ location }) => {
    const [nickName, setNickname] = useState("");
    const [createNickname, { data }] = useMutation(CREATE_NICKNAME);
    const [nicknameClick, setNicknameClick] = useState(false);

    useEffect(() => {
        if (data == null) return;
        if (data.createNickname.nickname) {
            sessionStorage.clear();
            alert("닉네임 설정을 완료했습니다.");
            window.localStorage.setItem("user", JSON.stringify(data));
            window.localStorage.setItem("auth", true);
            window.location.replace("/");
        } else {
            alert("중복된 닉네임입니다.");
            setNickname("");
            setNicknameClick(false);
        }
    }, [data]);

    //이미 닉네임이 있는 사람은 들어오지 못하게 막아야함
    const { from } = location.state || { from: { pathname: "/" } };
    if (window.localStorage.length > 1) return <Redirect to={from} />;

    return (
        <NicknamePageTemplate
            nickName={nickName}
            setNickname={setNickname}
            nicknameClick={nicknameClick}
            setNicknameClick={setNicknameClick}
            createNickname={createNickname}
        />
    );
};
export default Nickname;
