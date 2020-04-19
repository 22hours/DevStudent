import React from "react";
import { Container, Row } from "reactstrap";
import "./HotLinksModuleTemplate.css";
import WhatshotIcon from "@material-ui/icons/Whatshot";

const HotLinksModuleTemplate = ({ hotquestionList }) => {
    return (
        <div className="howto-hot-question-wrapper">
            <div className="howto-hot-question-header-wrapper">
                <div className="hot-question-header">
                    핫 게시물 &nbsp;
                    <WhatshotIcon style={{ fontSize: "14px" }} />
                </div>
            </div>
            <div className="howto-hot-question-list-wrapper">
                <div className="hot-question-list-items">{hotquestionList}</div>
            </div>
        </div>
    );
};

export default HotLinksModuleTemplate;
