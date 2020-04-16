import React, { useState } from "react";
import { Container, Input } from "reactstrap";
import "./MypageTemplate.css";

//imgs
import avatar_test from "img/mypage/avatar_test.png";

//icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const MypageTemplate = ({ alarmData, myContent }) => {
    const email = window.localStorage.getItem("email");
    const nickname = window.localStorage.getItem("nickname");

    //example
    const [gitAddress, setGitAddress] = useState("");
    const [linkedInAddress, setLinkedInAddress] = useState("king199777@gmail.com");

    return (
        <React.Fragment>
            <div className="MypageTemplate">
                <Container>
                    <div className="mypage-user-header-row">
                        <div className="avatar-col">
                            <img src={avatar_test}></img>
                        </div>
                        <div className="info-col">
                            <div className="badge-row">뱃지가 들어갈 공간</div>
                            <div className="nickname-row">
                                {nickname}
                                &nbsp; &nbsp;
                                <GitHubIcon style={{ fontSize: "18px" }} />
                                &nbsp;
                                <LinkedInIcon style={{ fontSize: "18px" }} />
                            </div>
                            <div className="sub-row">
                                <span id="edit-myinfo"> 회원 정보수정 </span>
                                &nbsp; &nbsp; &nbsp; &nbsp;
                                <span id="edit-email"> 이메일 정보수정 </span>
                            </div>
                        </div>
                    </div>
                    <div className="mypage-item-wrapper">
                        <div className="mypage-item-row">
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
                                <div className="item-box">
                                    <span id="item-label">GitHub</span>
                                    <div clsassName="link-input-box-wrapper">
                                        <input id="item-value" className="link-input-box"></input>
                                        <div className="submit-btn-wrapper">
                                            <button>저장</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-box">
                                    <span id="item-label">LinkedIn</span>
                                    <div clsassName="link-input-box-wrapper">
                                        <text id="item-value" className="link-input-box">
                                            {linkedInAddress}
                                        </text>
                                        <div className="submit-btn-wrapper">
                                            <button>수정</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item-collapse"></div>
                        </div>

                        <div className="mypage-item-row">
                            <div className="item-header">
                                <span>내가 쓴 글</span>
                            </div>
                            <div className="item-preview">{myContent}</div>
                            <div className="item-collapse"></div>
                        </div>
                    </div>
                    <div className="mypage-alarm-wrapper">
                        <div className="mypage-item-row">
                            <div className="item-header">알람</div>
                            <div className="item-preview">{alarmData}</div>
                            <div className="item-collapse"></div>
                        </div>
                    </div>
                    {/* <div className="mypage-nav-row">
                        <div className="mypage-nav-item">회원 정보</div>
                        <div className="mypage-nav-item">내 질문</div>
                        <div className="mypage-nav-item">내가 해결한 질문</div>
                        <div className="mypage-nav-item">알람</div>
                        <div className="mypage-nav-item">회원 탈퇴</div>
                    </div> */}
                </Container>
            </div>
        </React.Fragment>
    );
};
export default MypageTemplate;
