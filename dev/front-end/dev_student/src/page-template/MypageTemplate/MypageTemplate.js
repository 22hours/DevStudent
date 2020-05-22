import React, { useState, useEffect } from "react";
import { Container, Input, Collapse, Button, Alert } from "reactstrap";

import ServerError from "pages/ServerError";
import "./MypageTemplate.css";

//imgs
import avatar_test from "img/mypage/avatar_test.png";

//icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";

//atoms
import GradeAvatar from "atom/GradeAvatar/GradeAvatar";
import CircularProgress from "@material-ui/core/CircularProgress";

//Queries
import { POST, UPDATE_USER_INFO, FIND_USER_BY_NICKNAME } from "rest";

const MypageTemplate = ({ localData, userAlarm, myContent }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);
    const [btnClick, setBtnClick] = useState(false);
    const nickname = localData.nickname;
    const toggle = () => setIsOpen(!isOpen);
    //items
    const [gitAddress, setGitAddress] = useState(localData.gitLink);
    const [linkedInAddress, setLinkedInAddress] = useState("Comming Soon!!");
    const [myData, setMyData] = useState();
    const getMyData = async () => {
        const data = await POST("post", FIND_USER_BY_NICKNAME, { nickname: nickname });
        setMyData(data);
    };
    useEffect(() => {
        getMyData();
    }, [1]);

    const SaveAlertOpen = ({ response }) => {
        setAlertOpen(true);
        var localData = JSON.parse(localStorage.getItem("user"));
        localData.gitLink = response.gitLink;
        localStorage.setItem("user", JSON.stringify(localData));
        setBtnClick(true);
    };

    const SubmitButton = () => {
        if (btnClick === true) {
            return <div></div>;
        } else {
            return (
                <Button
                    style={btn_style}
                    onClick={() => {
                        POST("post", UPDATE_USER_INFO, {
                            nickname: myData.nickname,
                            gitLink: gitAddress,
                        })
                            .then((response) => SaveAlertOpen({ response }))
                            .catch((response) => console.log(response));
                    }}
                >
                    저장
                </Button>
            );
        }
    };

    const btn_style = {
        backgroundColor: "lightgray",
        fontSize: "16px",
        color: "black",
        borderColor: "lightgray",
        borderWeight: "0.1px",
        float: "right",
        marginBottom: "10px",
        marginTop: "2px",
        width: "60px",
        marginRight: "10px",
    };
    const alert_style = {
        width: "100%",
        fontSize: "18px",
        height: "50px",
        paddingBottom: "32px",
    };

    const moveGithubLink = () => {
        if (gitAddress === null) {
            alert("Github 주소를 등록해주세요.");
        } else {
            window.open("https://github.com/" + gitAddress, "_blank");
        }
    };

    return (
        <React.Fragment>
            <div className="MypageTemplate">
                <Container>
                    <div className="mypage-user-header-row">
                        <div className="avatar-col">
                            <img src={GradeAvatar(myData?.grade)}></img>
                        </div>
                        <div className="info-col">
                            <div className={"badge-row " + myData?.grade}>{myData?.grade}</div>
                            <div className="nickname-row">
                                {myData?.nickname}
                                &nbsp; &nbsp;
                                <div className="mypage-githubicon" onClick={moveGithubLink}>
                                    <GitHubIcon style={{ fontSize: "20px" }} />
                                </div>
                                &nbsp;
                                <LaptopChromebookIcon style={{ fontSize: "20px" }} />
                            </div>
                            <div className="sub-row">
                                <span id="edit-myinfo"> {myData?.point} point </span>
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
                                    <p id="item-value">{myData?.email}</p>
                                </div>
                                <div className="item-box">
                                    <span id="item-label">닉네임</span>
                                    <p id="item-value">{myData?.nickname}</p>
                                </div>
                                <Collapse isOpen={isOpen}>
                                    <div className="item-box">
                                        <span id="item-label">GitHub</span>
                                        <div clsassName="link-input-box-wrapper">
                                            <div
                                                className="github-address"
                                                style={{ width: "150px", display: "inline-block", marginRight: "5px" }}
                                            >
                                                https://github.com/
                                            </div>
                                            <div
                                                className="github-address-inputbox"
                                                style={{ width: "195px", display: "inline-block" }}
                                            >
                                                <Input
                                                    id="item-value"
                                                    className="link-input-box"
                                                    value={gitAddress}
                                                    onChange={({ target: { value } }) => setGitAddress(value)}
                                                    placeholder="Write Your Github ID!!"
                                                ></Input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item-box">
                                        <span id="item-label">Homepage</span>
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
                                        <div>
                                            <SubmitButton />
                                        </div>
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
                            <div className="item-preview">{userAlarm}</div>
                            <div className="item-collapse"></div>
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
};
export default MypageTemplate;
