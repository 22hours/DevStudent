import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Collapse, Alert } from "reactstrap";
import "./RecruitScheduleModule.css";
import "module/AnimateCss/AnimateCss.css";
const RecruitScheduleModule = () => {
    const [item, setItem] = useState();
    const [remain, setRemain] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [isOpenText, setIsOpenText] = useState("더보기");
    useEffect(() => {
        axios
            .get("https://raw.githubusercontent.com/jojoldu/junior-recruit-scheduler/master/db.json")
            .then((response) => {
                setItem(
                    response.data.recruits.slice(0, 3).map(({ endDate, link, description }) => (
                        <a href={link}>
                            <div className="recruit-item" key={link}>
                                <p id="description">{description}</p> <p id="endData"> 기간 : {endDate}</p>
                            </div>
                        </a>
                    ))
                );
                setRemain(
                    response.data.recruits.slice(4).map(({ endDate, link, description }) => (
                        <a href={link}>
                            <div className="recruit-item" key={link}>
                                <p id="description">{description}</p> <p id="endData"> 기간 : {endDate}</p>
                            </div>
                        </a>
                    ))
                );
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [1]);
    return (
        <React.Fragment>
            <div className="RecruitScheduleModule">
                <Container>
                    <div className="recruit-header">
                        <span id="header" className="bounce">
                            실시간 채용 정보
                        </span>
                        <p id="reference">
                            출처 :&nbsp;
                            <a href="https://github.com/jojoldu/junior-recruit-scheduler">
                                주니어 개발자를 위한 취업 정보
                            </a>
                        </p>
                    </div>
                    {item}
                    <Collapse isOpen={isOpen}>{remain}</Collapse>
                    <div
                        onClick={() => {
                            if (isOpenText === "더보기") {
                                setIsOpenText("닫기");
                            } else {
                                setIsOpenText("더보기");
                            }
                            toggle();
                        }}
                        className="recruit-item"
                        style={{ cursor: "pointer" }}
                    >
                        <p id="description">{isOpenText}</p>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default RecruitScheduleModule;
