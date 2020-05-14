import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import NicknamePageTemplate from "page-template/NicknamePageTemplate/NicknamePageTemplate";
import { useEffect } from "react";
import { request, CREATE_NICKNAME } from "authRest";

const Nickname = ({ location }) => {
    const [nickName, setNickname] = useState("");
    const [createNicknameResponse, setCreateNicknameResponse] = useState(null);
    const [nicknameClick, setNicknameClick] = useState(false);
    const handleCreateNickname = (data) => {
        request("post", CREATE_NICKNAME, data)
            .then((response) => setCreateNicknameResponse(response))
            .catch((response) => console.log(response));
    };
    useEffect(() => {
        if (createNicknameResponse == null) return;
        if (createNicknameResponse.nickname) {
            sessionStorage.clear();
            alert("닉네임 설정을 완료했습니다.");
            window.localStorage.setItem("user", JSON.stringify(createNicknameResponse));
            window.localStorage.setItem("auth", true);
            window.location.replace("/");
        } else {
            alert("중복된 닉네임입니다.");
            setNickname("");
            setNicknameClick(false);
        }
    }, [createNicknameResponse]);

    //이미 닉네임이 있는 사람은 들어오지 못하게 막아야함
    const { from } = location.state || { from: { pathname: "/" } };
    if (window.localStorage.length > 1) return <Redirect to={from} />;
    if (window.localStorage.length === 1 && window.sessionStorage.length === 0) return <Redirect to={from} />;

    return (
        <NicknamePageTemplate
            nickName={nickName}
            setNickname={setNickname}
            nicknameClick={nicknameClick}
            setNicknameClick={setNicknameClick}
            handleCreateNickname={handleCreateNickname}
        />
    );
};
export default Nickname;
