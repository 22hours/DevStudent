import React from "react";
import { Container } from "reactstrap";
import "./MypageTemplate.css";

//imgs
import avatar_test from "img/mypage/avatar_test.png";
import avatar_test2 from "img/mypage/avatar_test2.png";

//icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const MypageTemplate = ({ alarmData, myContent }) => {
    const nickname = window.localStorage.getItem("nickname");
    // const alarms = alarmData.map(({ _id, content, date, respondent }) => (
    //     <div key={_id} className="item-box">
    //         <span id="item-label">{date}</span>
    //         <p id="item-value">
    //             {respondent} {content}
    //         </p>
    //     </div>
    // ));
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
                                    <p id="item-value">king199777@gamil.com</p>
                                </div>
                                <div className="item-box">
                                    <span id="item-label">닉네임</span>
                                    <p id="item-value">{nickname}</p>
                                </div>
                                <div className="item-box">
                                    <span id="item-label">GitHub</span>
                                    <p id="item-value">https://github.com/winterlood</p>
                                </div>
                                <div className="item-box">
                                    <span id="item-label">LinkedIn</span>
                                    <p id="item-value">king199777@gamil.com</p>
                                </div>
                                <div className="item-box">
                                    <p id="item-value">더보기</p>
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
