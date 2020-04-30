import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./HowToBoxItem.css";
//imgs
import avatar_test from "img/mypage/avatar_test.png";
import debal from "img/mypage/debal.png";

import bean from "img/rate/bean.png";
import short from "img/rate/short.png";
import tall from "img/rate/tall.png";
import grande from "img/rate/grande.png";
import venti from "img/rate/venti.png";

import trenta from "img/rate/trenta.png";

// atoms
import Tag from "atom/Tag/Tag";
import Avatar from "atom/Avatar/Avatar";
import GradeAvatar from "atom/GradeAvatar/GradeAvatar";

//icons
import VisibilityIcon from "@material-ui/icons/Visibility";

const HowToBoxItem = (props) => {
    const {
        id,
        authorNickname,
        authorGrade,
        title,
        date,
        dateToText,
        previews,
        answers,
        views,
        likesCount,
        adoptedAnswerId,
        tags,
    } = props; //likes 도 추가해야함
    console.log(tags);
    const nickname = JSON.parse(localStorage.getItem("user"))?.nickname;
    const TagListRenderer = () => {
        var TagList = null;
        if (tags[0] !== "") {
            TagList = tags.map((tagItem) => <Tag key={tagItem} tagItem={tagItem}></Tag>);
            return <div className="tags-row">{TagList}</div>;
        } else {
            return <span>&nbsp;</span>;
        }
    };
    return (
        <div className={"HowToBoxItem " + (authorNickname === nickname ? "myItem" : "none")}>
            <div className="howto-item-stats-col">
                <div className={"stats-row "}>
                    <div className={adoptedAnswerId !== null ? "solved" : answers === 0 ? "default" : "hot"}>
                        <div id="stats-value">{answers}</div>
                        <div id="stats-br">&nbsp;</div>
                        <div id="stats-label">답변</div>
                    </div>
                </div>
                <div style={{ lineHeight: "0.5rem" }}>&nbsp;</div>
                <div className="stats-row">
                    <div id="stats-value">{likesCount}</div>
                    <div id="stats-br">&nbsp;</div>
                    <div id="stats-label">좋아요</div>
                </div>
                <div className="stats-row">
                    <div id="stats-label">
                        <VisibilityIcon style={{ fontSize: "12px" }} /> {views}
                    </div>
                </div>
            </div>
            <div className="howto-item-main-col">
                <div className="header-row">
                    <Link to={"/howto/question/" + id}>{title}</Link>
                </div>
                <div className="preview-row">{previews}</div>
                <div className="item-info-row">
                    <div className="item-info-content-col">
                        <TagListRenderer />
                        <div id="views-row">
                            {date}&nbsp;&nbsp;{dateToText}
                        </div>
                    </div>
                    <div className="item-info-person-col">
                        <div className="person-avatar-col">
                            <Avatar img={GradeAvatar(authorGrade)} />
                        </div>
                        <div className="person-info-col">
                            <div id="user-nickname">
                                <a id="nickname" href={"/userinfo/" + authorNickname}>
                                    {authorNickname}
                                </a>
                            </div>
                            <div id="user-stat">120 point</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToBoxItem;
