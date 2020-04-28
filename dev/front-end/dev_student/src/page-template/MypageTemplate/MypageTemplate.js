import React, { useState } from "react";
import { Container, Input, Collapse, Button, Alert } from "reactstrap";
import "./MypageTemplate.css";

//imgs
import avatar_test from "img/mypage/avatar_test.png";

//icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

//atoms
import GradeAvatar from "atom/GradeAvatar/GradeAvatar";

const MypageTemplate = ({ localData, alarmData, myContent }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const showAlert = () => setAlertOpen(!alertOpen);
    //example
    const [gitAddress, setGitAddress] = useState("github.com/sg05138");
    const [linkedInAddress, setLinkedInAddress] = useState("king199777@gmail.com");

    const btn_style = {
        backgroundColor: "lightgray",
        fontSize: "17px",
        color: "black",
        borderColor: "lightgray",
        float: "right",
        marginBottom: "10px",
        marginTop: "2px",
        width: "60px",
    };
    const alert_style = {
        width: "calc(100% - 80px)",
        fontSize: "15px",
        height: "40px",
        paddingBottom: "32px",
    };

    const moveGithubLink = () => {
        window.open("http://" + gitAddress, "_blank");
    };

    return (
        <React.Fragment>
            <div className="MypageTemplate">
                <Container>
                    <div className="mypage-user-header-row">
                        <div className="avatar-col">
                            <img src={GradeAvatar(localData.grade)}></img>
                        </div>
                        <div className="info-col">
                            <div className={"badge-row " + localData.grade}>{localData.grade}</div>
                            <div className="nickname-row">
                                {localData.nickname}
                                &nbsp; &nbsp;
                                <div className="mypage-githubicon" onClick={moveGithubLink}>
                                    <GitHubIcon style={{ fontSize: "18px" }} />
                                </div>
                                &nbsp;
                                <LinkedInIcon style={{ fontSize: "18px" }} />
                            </div>
                            <div className="sub-row">
                                <span id="edit-myinfo"> 회원 정보수정 </span>
                                &nbsp; &nbsp; &nbsp; &nbsp;
                            </div>
                        </div>
                    </div>
                    <div className="mypage-item-wrapper">
                        <div className="mypage-item-row">
                            <div className="item-header">
                                <span>유저 정보</span>
                                <span className="edit-myinfo" onClick={toggle}>
                                    수정
                                </span>
                            </div>
                            <div className="item-preview">
                                <div className="item-box">
                                    <span id="item-label">이메일</span>
                                    <p id="item-value">{localData.email}</p>
                                </div>
                                <div className="item-box">
                                    <span id="item-label">닉네임</span>
                                    <p id="item-value">{localData.nickname}</p>
                                </div>
                                <Collapse isOpen={isOpen}>
                                    <div className="item-box">
                                        <span id="item-label">GitHub</span>
                                        <div clsassName="link-input-box-wrapper">
                                            <Input
                                                id="item-value"
                                                className="link-input-box"
                                                value={gitAddress}
                                                onChange={({ target: { value } }) => setGitAddress(value)}
                                                placeholder="github.com/devstu"
                                            ></Input>
                                        </div>
                                    </div>
                                    <div className="item-box">
                                        <span id="item-label">LinkedIn</span>
                                        <div clsassName="link-input-box-wrapper">
                                            <Input
                                                id="item-value"
                                                className="link-input-box"
                                                value={linkedInAddress}
                                                onChange={({ target: { value } }) => setLinkedInAddress(value)}
                                            ></Input>
                                        </div>
                                    </div>
                                    <div></div>
                                    <div>
                                        <Button style={btn_style} onClick={showAlert}>
                                            저장
                                        </Button>
                                        <Alert color="info" isOpen={alertOpen} style={alert_style}>
                                            회원정보가 수정되었습니다.
                                        </Alert>
                                    </div>
                                </Collapse>
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
