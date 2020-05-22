import React, { useState, useEffect } from "react";
import "./HowToRuleModule.css";
import { Container } from "reactstrap";

// icons
import LabelIcon from "@material-ui/icons/Label";
import HelpIcon from "@material-ui/icons/Help";
import TextsmsIcon from "@material-ui/icons/Textsms";
import ThumbsUpDownIcon from "@material-ui/icons/ThumbsUpDown";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import PeopleIcon from "@material-ui/icons/People";
//item
import HowToRuleItem from "item/HowToRuleItem/HowToRuleItem";
import HowToRuleContentItem from "item/HowToRuleContentItem/HowToRuleContentItem";
import { Link } from "react-router-dom";

const HowToRuleModule = () => {
    const [clicked, setClicked] = useState(1);
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         let now = clicked;
    //         let next = (now + 1) % 7;
    //         if (next === 0) next += 1;
    //         setClicked(next);
    //     }, 5000);
    //     return () => clearInterval(interval);
    // }, [clicked]);
    const helpmsg =
        "DEVSTU에서는 태그를 붙여 질문하여 더 빠르게 응답을 받아 볼 수 있으며," +
        "현재 내가 작성하고 있는 질문이 질문 리스트에 어떻게 보일지 상단의 미리보기를 제공합니다." +
        "추가적으로 Markdown 에디터를 도입하여 소스코드와 관련된 질문들을 더 알아보기 쉽게 제공합니다";
    return (
        <div className="HowToRuleModule">
            <Container style={{ height: "auto", overflow: "hidden" }}>
                <div className="howto-rule-header">
                    <span className="header">DEVSTU HOWTO 사용법</span>
                    <div className="description">집단지성으로 헤쳐모여</div>
                </div>
                <div className="btn-col">
                    <HowToRuleItem
                        nowClicked={clicked}
                        key={1}
                        id={1}
                        title={"질문 하세요"}
                        message={helpmsg}
                        setClicked={setClicked}
                        icon={<HelpIcon style={{ fontSize: "18px", marginBottom: "5px" }} />}
                    />
                    <HowToRuleItem
                        nowClicked={clicked}
                        key={2}
                        id={2}
                        title={"답변 하세요"}
                        message={
                            "질문메세지질문메세지질문메세지질문메세지질문메세지질문메세지질문메세지질문메세지질문메세지질문메세지질문메세지질문메세지질문메세지질문메세지"
                        }
                        setClicked={setClicked}
                        icon={<QuestionAnswerIcon style={{ fontSize: "18px", marginBottom: "5px" }} />}
                    />
                    <HowToRuleItem
                        nowClicked={clicked}
                        key={3}
                        id={3}
                        title={"공감 하세요"}
                        message={"질문메세지질문메세지질문메세지질문메세지질문메세지질문메세지질문메세지"}
                        setClicked={setClicked}
                        icon={<PeopleIcon style={{ fontSize: "18px", marginBottom: "5px" }} />}
                    />
                </div>
                <div className="img-col pc-only">
                    <HowToRuleContentItem nowClicked={clicked} />
                </div>
            </Container>
        </div>
    );
};

export default HowToRuleModule;
