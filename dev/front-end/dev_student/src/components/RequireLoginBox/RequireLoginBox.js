import React from "react";
import "./RequireLoginBox.css";
import { Alert } from "reactstrap";
import { Link } from "react-router-dom";
const RequireLoginBox = ({ children }) => {
    const auth = window.sessionStorage.getItem("auth");
    if (auth) {
        return <React.Fragment>{children}</React.Fragment>;
    } else {
        return (
            <React.Fragment>
                <Alert color="info">
                    댓글을 남기려면 <a href="http://localhost:3000/login">로그인 </a>
                    하세요
                </Alert>
            </React.Fragment>
        );
    }
};

export default RequireLoginBox;
