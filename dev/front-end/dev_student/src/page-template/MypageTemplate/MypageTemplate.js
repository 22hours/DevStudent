import React, { useState } from "react";
import { Container, Input, Collapse, Button, Alert } from "reactstrap";
import { useMutation } from "@apollo/react-hooks";
import { useQuery } from "@apollo/react-hooks";
import { UPDATE_USER_INFO } from "mutation/mutations";
import { FIND_USER_BY_NICKNAME } from "query/queries";
import "./MypageTemplate.css";

//imgs
import avatar_test from "img/mypage/avatar_test.png";

//icons
import GitHubIcon from "@material-ui/icons/GitHub";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";

//atoms
import GradeAvatar from "atom/GradeAvatar/GradeAvatar";
import CircularProgress from "@material-ui/core/CircularProgress";

const MypageTemplate = ({ localData, alarmData, myContent }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);
    const [btnClick, setBtnClick] = useState(false);
    const [updateUserInfo] = useMutation(UPDATE_USER_INFO);
    const nickname = localData.nickname;
    const toggle = () => setIsOpen(!isOpen);

    //items
    const [gitAddress, setGitAddress] = useState(localData.gitLink);
    const [linkedInAddress, setLinkedInAddress] = useState("winterlood.github.io");

    const handleSubmit = () => {
        updateUserInfo({
            variables: {
                nickname: nickname,
                gitLink: gitAddress,
            },
        })
            .then((response) => {
                var data = response.data.updateUserInfo;
                var localData = JSON.parse(localStorage.getItem("user"));
                localData.gitLink = data.gitLink;
                localStorage.setItem("user", JSON.stringify(localData));
                setAlertOpen(!alertOpen);
                setBtnClick(true);
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    const SubmitButton = () => {
        if (btnClick === true) {
            return <div></div>;
        } else {
            return (
                <Button style={btn_style} onClick={handleSubmit}>
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
        window.open("http://" + gitAddress, "_blank");
    };

    const { loading, error, data } = useQuery(FIND_USER_BY_NICKNAME, {
        variables: { nickname: localData.nickname },
    });

    if (loading)
        return (
            <div>
                <CircularProgress />
            </div>
        );
    if (error) return <p>Error!</p>;

    const mydata = data.findUserByNickname;

    return (
        <React.Fragment>
            <div className="MypageTemplate">
                <Container>
                    <div className="mypage-user-header-row">
                        <div className="avatar-col">
                            <img src={GradeAvatar(mydata.grade)}></img>
                        </div>
                        <div className="info-col">
                            <div className={"badge-row " + mydata.grade}>{mydata.grade}</div>
                            <div className="nickname-row">
                                {mydata.nickname}
                                &nbsp; &nbsp;
                                <div className="mypage-githubicon" onClick={moveGithubLink}>
                                    <GitHubIcon style={{ fontSize: "20px" }} />
                                </div>
                                &nbsp;
                                <LaptopChromebookIcon style={{ fontSize: "20px" }} />
                            </div>
                            <div className="sub-row">
                                <span id="edit-myinfo"> {mydata.point} point </span>
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
                                    <p id="item-value">{mydata.email}</p>
                                </div>
                                <div className="item-box">
                                    <span id="item-label">닉네임</span>
                                    <p id="item-value">{mydata.nickname}</p>
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
                            <div className="item-preview">{alarmData}</div>
                            <div className="item-collapse"></div>
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
};
export default MypageTemplate;
