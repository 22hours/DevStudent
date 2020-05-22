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
    const helpmsg = "질문메세지질문메세지질문메세지질문메세지질문메세지질문메세지질문메세지";
    return (
        <div className="HowToRuleModule">
            <Container style={{ height: "auto", overflow: "hidden" }}>
                <div className="howto-rule-header">
                    <span className="header">DEVSTU HOWTO 사용법</span>
                    <div className="description">DEVSTU는 당신을 원한다!</div>
                </div>
                <div className="btn-col">
                    <HowToRuleItem
                        nowClicked={clicked}
                        key={1}
                        id={1}
                        title={"질문하세요"}
                        message={helpmsg}
                        setClicked={setClicked}
                        icon={<HelpIcon style={{ fontSize: "18px", marginBottom: "5px" }} />}
                    />
                    <HowToRuleItem
                        nowClicked={clicked}
                        key={2}
                        id={2}
                        title={"답변하세요"}
                        message={
                            "질문메세지질문메세지질문메세지질문메세지질문메세지질문메세지질문메세지질문메세지질문메세지질문메세지질문메세지질문메세지질문메세지질문메세지"
                        }
                        setClicked={setClicked}
                        icon={<HelpIcon style={{ fontSize: "18px", marginBottom: "5px" }} />}
                    />
                    <HowToRuleItem
                        nowClicked={clicked}
                        key={3}
                        id={3}
                        title={"질문하는법"}
                        message={"질문메세지질문메세지질문메세지질문메세지질문메세지질문메세지질문메세지"}
                        setClicked={setClicked}
                        icon={<HelpIcon style={{ fontSize: "18px", marginBottom: "5px" }} />}
                    />
                </div>
                <div className="img-col pc-only">d</div>
            </Container>
        </div>
    );
};

export default HowToRuleModule;
