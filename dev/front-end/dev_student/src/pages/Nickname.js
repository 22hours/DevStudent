import React, { useState } from "react";
import NicknamePageTemplate from "page-template/NicknamePageTemplate/NicknamePageTemplate";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_NICKNAME } from "mutation/mutations";

const Nickname = () => {
    const [nickName, setNickname] = useState("");
    const [createNickname] = useMutation(CREATE_NICKNAME);
    const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    const [nicknameClick, setNicknameClick] = useState(false);

    const handleSubmitNickname = () => {
        const email = sessionStorage.getItem("email");
        if (korean.test(nickName)) {
            alert("닉네임은 영문으로 입력해주세요.");
            return;
        }
        if (nickName.length > 10 || nickName.length < 3) {
            alert("닉네임은 3자리 ~ 10자리로 입력해주세요.");
            return;
        } else {
            setNicknameClick(true);
            createNickname({
                variables: {
                    email: email,
                    nickname: nickName,
                },
            })
                .then((response) => {
                    if (response.data.createNickname.nickname) {
                        var data = response.data.createNickname;
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
                })
                .catch((err) => {
                    alert(err.messeage);
                    setNicknameClick(false);
                });
        }
    };
    return (
        <NicknamePageTemplate
            nickName={nickName}
            setNickname={setNickname}
            handleSubmitNickname={handleSubmitNickname}
            nicknameClick={nicknameClick}
            setNicknameClick={setNicknameClick}
        />
    );
};
export default Nickname;
