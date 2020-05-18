import React, { useEffect, useState } from "react";

import { POST, UPDATE_AUTH_STATE } from "rest";

import EmailCheckPageTemplate from "page-template/EmailCheckPageTemplate/EmailCheckPageTemplate";
import NotFoundPageTemplate from "page-template/NotFoundPageTemplate/NotFoundPageTemplate";

const EmailCheck = ({ match }) => {
    const rand = match.params.rand;
    const [state, setState] = useState("wait");
    const [updateUserAuthStateResponse, setUpdateUserAuthStateResponse] = useState(null);
    const handleUpdateAuthState = async () => {
        POST("post", UPDATE_AUTH_STATE, {
            authState: rand,
        })
            .then((response) => {
                if (response.email !== null) {
                    setUpdateUserAuthStateResponse(response.data.updateUserAuthState);
                    setState("success");
                } else {
                    setUpdateUserAuthStateResponse(response.updateUserAuthState);
                    setState("error");
                }
            })
            .catch((err) => {
                setState("error");
            });
    };

    useEffect(() => {
        handleUpdateAuthState();
    }, [1]);
    switch (state) {
        case "wait":
            return <p>인증 진행중 ...</p>;
        case "success":
            return <EmailCheckPageTemplate>인증 완료</EmailCheckPageTemplate>;
        case "error":
            return <EmailCheckPageTemplate />;
        default:
            return <p>인증 진행중 ...</p>;
    }
};

export default EmailCheck;
