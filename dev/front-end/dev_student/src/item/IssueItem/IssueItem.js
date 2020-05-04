import React, { useState } from "react";
import "./IssueItem.css";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import { timeForToday } from "util/time";

const IssueItem = ({ html_url, title, created_at, state, labels, user }) => {
    console.log(state);
    const StateIcon = () => {
        if (state === "open") {
            return <ErrorOutlineIcon style={{ fontSize: "26px", color: "rgb(73,180,99)" }} />;
        } else return <CheckCircleOutlineIcon style={{ fontSize: "18px", color: "rgb(214,83,93)" }} />;
    };
    const Labels = () => {};
    return (
        <div className="IssueItem">
            <div className="icon-col">
                <StateIcon />
            </div>
            <div className="main-col">
                <div className="title-row">
                    <a href={html_url}>{title}</a>
                </div>
                <div className="author-row">
                    <img src={user.avatar_url}></img> &nbsp;
                    <a href={user.html_url}>{user.login}</a>
                    &nbsp;&nbsp;{timeForToday(created_at)}
                </div>
            </div>
        </div>
    );
};
export default IssueItem;
