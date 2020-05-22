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
    const answermsg =
        "DEVSTU는 집단지성을 통해, 한국 개발자들의 방대한 지식 공유의 장이 되는것을 궁극적인 목적으로 합니다. 누군가의 질문에 답변하고, 자신의 지식을 공유하세요! 작은 지식들이 모여 거대하고 위대한 생태계를 만드는데에 동참하세요!";
    const emotemsg =
        "누군가의 질문 혹은 답변에는 추천과 반대로 자신의 의견을 짧게라도 어필 할 수 있습니다. 좋은 질문과 답변에 추천을, 사이트의 목적을 해치는 질문과 답변에는 반대 의사를 표현하여 한국 개발자들만을 위한 생태계를 지켜주세요!";
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
                        title={"질문하기"}
                        message={helpmsg}
                        setClicked={setClicked}
                        icon={<HelpIcon style={{ fontSize: "18px", marginBottom: "5px" }} />}
                    />
                    <HowToRuleItem
                        nowClicked={clicked}
                        key={2}
                        id={2}
                        title={"답변하기"}
                        message={answermsg}
                        setClicked={setClicked}
                        icon={<QuestionAnswerIcon style={{ fontSize: "18px", marginBottom: "5px" }} />}
                    />
                    <HowToRuleItem
                        nowClicked={clicked}
                        key={3}
                        id={3}
                        title={"공감하기"}
                        message={emotemsg}
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
