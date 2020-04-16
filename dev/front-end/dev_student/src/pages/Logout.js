import React, { useState } from "react";
import { logOut, getAuthInfo } from "auth";

const Logout = () => {
    useState(() => {
        logOut();
        window.location.replace("/");
    }, [1]);
    return <React.Fragment>로그아웃 완료</React.Fragment>;
};

export default Logout;
