import React, { useEffect, useState } from "react";
import { useMutation } from "react-apollo";
import { UPDATE_USER_AUTH_STATE } from "mutation/mutations";

import EmailCheckPageTemplate from "page-template/EmailCheckPageTemplate/EmailCheckPageTemplate";
import NotFoundPageTemplate from "page-template/NotFoundPageTemplate/NotFoundPageTemplate";

const EmailCheck = ({ match }) => {
    const rand = match.params.rand;
    const [updateUserAuthState] = useMutation(UPDATE_USER_AUTH_STATE);
    const [state, setState] = useState("wait");
    const [data, setData] = useState();
    const handleUpdateAuthState = async () => {
        updateUserAuthState({
            variables: {
                authState: rand,
            },
        })
            .then((response) => {
                if (response.data.updateUserAuthState.email !== null) {
                    setData(response.data.updateUserAuthState);
                    setState("success");
                } else {
                    setData(response.data.updateUserAuthState);
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
            return <NotFoundPageTemplate />;
        default:
            return <p>인증 진행중 ...</p>;
    }
};

export default EmailCheck;
