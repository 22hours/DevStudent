import React, { useState } from "react";
import NicknamePageTemplate from "page-template/NicknamePageTemplate/NicknamePageTemplate";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_NICKNAME } from "mutation/mutations";

const Nickname = () => {
    const [nickName, setNickname] = useState("");
    const [createNickname] = useMutation(CREATE_NICKNAME);

    const handleSubmitNickname = () => {
        const email = sessionStorage.getItem("email");
        if (nickName.length > 8 || nickName.length < 3) {
            alert("닉네임은 3자리 ~ 8자리로 입력해주세요.");
            return;
        } else {
            createNickname({
                variables: {
                    email: email,
                    nickname: nickName,
                },
            })
                .then((response) => {
                    console.log(response);
                    if (response.data.createNickname.nickname) {
                        var data = response.data.createNickname;
                        sessionStorage.clear();
                        localStorage.setItem("user", JSON.stringify(data));
                        alert("닉네임 설정을 완료했습니다.");
                        window.location.replace("/login");
                    } else {
                        alert("중복된 닉네임입니다.");
                        setNickname("");
                    }
                })
                .catch((err) => {
                    alert(err.messeage);
                });
        }
    };
    return (
        <NicknamePageTemplate
            nickName={nickName}
            setNickname={setNickname}
            handleSubmitNickname={handleSubmitNickname}
        />
    );
};
export default Nickname;
