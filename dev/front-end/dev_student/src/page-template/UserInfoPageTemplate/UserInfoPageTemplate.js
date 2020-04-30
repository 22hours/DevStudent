import React, { useState } from "react";
import { Container } from "reactstrap";
import "./UserInfoPageTemplate.css";

//icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";

//atoms
import GradeAvatar from "atom/GradeAvatar/GradeAvatar";

const UserInfoPageTemplate = ({ email, nickname, gitLink, grade, point, userContent }) => {
    const moveGithubLink = () => {
        window.open(gitLink, "_blank");
    };
    return (
        <React.Fragment>
            <div className="userpageTemplate">
                <Container>
                    <div className="userpage-user-header-row">
                        <div className="avatar-col">
                            <img src={GradeAvatar(grade)}></img>
                        </div>
                        <div className="info-col">
                            <div className={"badge-row " + grade}>{grade}</div>
                            <div className="nickname-row">
                                {nickname}
                                &nbsp; &nbsp;
                                <div className="userpage-githubicon" onClick={moveGithubLink}>
                                    <GitHubIcon style={{ fontSize: "20px" }} />
                                </div>
                                &nbsp;
                                <LaptopChromebookIcon style={{ fontSize: "20px" }} />
                            </div>
                            <div className="sub-row">
                                <span id="edit-myinfo"> {point}point </span>
                                &nbsp; &nbsp; &nbsp; &nbsp;
                            </div>
                        </div>
                    </div>
                    <div className="userpage-item-wrapper">
                        <div className="userpage-item-row">
                            <div className="item-header">
                                <span>유저 정보</span>
                            </div>
                            <div className="item-preview">
                                <div className="item-box">
                                    <span id="item-label">이메일</span>
                                    <p id="item-value">{email}</p>
                                </div>
                                <div className="item-box">
                                    <span id="item-label">닉네임</span>
                                    <p id="item-value">{nickname}</p>
                                </div>
                            </div>
                            <div className="item-collapse"></div>
                        </div>

                        <div className="userpage-item-row">
                            <div className="item-header">
                                <span>{nickname} 가 쓴 글</span>
                            </div>
                            <div className="item-preview">{userContent}</div>
                            <div className="item-collapse"></div>
                        </div>
                    </div>
                    <div className="userpage-rank-wrapper">
                        <div className="userpage-item-row">
                            <div className="item-header">랭킹</div>
                            <div className="item-preview"></div>
                            <div className="item-collapse"></div>
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
};
export default UserInfoPageTemplate;
