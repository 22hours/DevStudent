import React, { useState, useEffect } from "react";
import "./HowToRuleModule.css";
import { Container } from "reactstrap";

// icons
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
    useEffect(() => {
        const interval = setInterval(() => {
            let now = clicked;
            let next = (now + 1) % 7;
            if (next === 0) next += 1;
            setClicked(next);
        }, 3000);
        return () => clearInterval(interval);
    }, [clicked]);
    return (
        <Container>
            <div className="HowToRuleModule">
                <div className="howto-rule-header">
                    DEVSTU 에서는 이렇게 질문과 답변을 주고받아요 누구나 할 수 있어요
                </div>
                <div className="pc-only">
                    <div className="howto-rule-item-col">
                        <HowToRuleItem
                            id={1}
                            setClicked={setClicked}
                            key={1}
                            nowClicked={clicked}
                            icon={<TextsmsIcon />}
                            message={"편하게 질문 하기"}
                        >
                            <HelpIcon />
                        </HowToRuleItem>

                        <HowToRuleItem
                            nowClicked={clicked}
                            setClicked={setClicked}
                            id={2}
                            key={2}
                            icon={<ThumbsUpDownIcon />}
                            message={"해답에 투표하기"}
                        >
                            <HelpIcon />
                        </HowToRuleItem>
                        <HowToRuleItem
                            nowClicked={clicked}
                            setClicked={setClicked}
                            id={3}
                            key={3}
                            icon={<QuestionAnswerIcon />}
                            message={"질문에 답변하기"}
                        >
                            <HelpIcon />
                        </HowToRuleItem>
                    </div>
                    <div className="howto-rule-content-col">
                        <HowToRuleContentItem nowClicked={clicked} />
                    </div>
                    <div className="howto-rule-item-col">
                        <HowToRuleItem
                            nowClicked={clicked}
                            setClicked={setClicked}
                            id={4}
                            key={4}
                            icon={<PeopleIcon />}
                            message={"다함께 성장하기"}
                        >
                            <HelpIcon />
                        </HowToRuleItem>
                        <HowToRuleItem
                            nowClicked={clicked}
                            setClicked={setClicked}
                            id={5}
                            key={5}
                            icon={<CheckCircleIcon />}
                            message={"답변을 채택하기"}
                        >
                            <HelpIcon />
                        </HowToRuleItem>
                        <HowToRuleItem
                            nowClicked={clicked}
                            setClicked={setClicked}
                            id={6}
                            key={6}
                            icon={<LoyaltyIcon />}
                            message={"해시태그 달기"}
                        >
                            <HelpIcon />
                        </HowToRuleItem>
                    </div>
                </div>
                <div className="mobile-only">mobile</div>
            </div>
        </Container>
    );
};

export default HowToRuleModule;
