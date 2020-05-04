import React, { useState } from "react";
import "./IssueItem.css";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import { timeForToday } from "util/time";

//icons
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

const IssueItem = ({ html_url, title, created_at, state, labels, user, comments }) => {
    const StateIcon = () => {
        if (state === "open") {
            return <ErrorOutlineIcon style={{ fontSize: "26px", color: "rgb(73,180,99)" }} />;
        } else return <CheckCircleOutlineIcon style={{ fontSize: "18px", color: "rgb(214,83,93)" }} />;
    };

    const LabelItem = ({ name, color }) => {
        console.log(color);
        const style = {
            backgroundColor: "#" + color,
        };
        return (
            <span className="LabelItem" style={style}>
                {name}
            </span>
        );
    };

    const Labels = labels?.map(({ name, color, node_id }) => <LabelItem name={name} color={color} key={node_id} />);
    return (
        <div className="IssueItem">
            <div className="icon-col">
                <StateIcon />
            </div>
            <div className="main-col">
                <div className="title-row">
                    <a href={html_url}>{title}</a>
                    {Labels}
                </div>
                <div className="author-row">
                    <img src={user.avatar_url}></img> &nbsp;
                    <a href={user.html_url}>{user.login}</a>
                    &nbsp;&nbsp;{timeForToday(created_at)}
                </div>
            </div>
            <div className="comment-col">
                <ChatBubbleOutlineIcon style={{ color: "gray", fontSize: "18px" }} /> &nbsp;
                {comments}
            </div>
        </div>
    );
};
export default IssueItem;
