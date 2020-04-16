import React, { useState } from "react";
const Logout = () => {
    useState(() => {
        window.sessionStorage.clear();
        window.location.replace("/");
    }, [1]);
    return <React.Fragment>로그아웃 완료</React.Fragment>;
};

export default Logout;
