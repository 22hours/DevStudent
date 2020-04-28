import React, { useState } from "react";
import NicknamePageTemplate from "page-template/NicknamePageTemplate/NicknamePageTemplate";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_NICKNAME } from "mutation/mutations";
const Nickname = () => {
    const [nickName, setNickname] = useState("");
    const [createNickname] = useMutation(CREATE_NICKNAME);
    const handleSubmitNickname = () => {
        const email = sessionStorage.getItem("email");
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
                } else {
                    alert("Duplicated Nickname!");
                    setNickname("");
                }
            })
            .catch((err) => {
                alert(err.messeage);
            });
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
