import React from "react";
import "./HotLinksModuleTemplate.css";
import WhatshotIcon from "@material-ui/icons/Whatshot";

const HotLinksModuleTemplate = ({ hotquestionList }) => {
    return (
        <div className="sidebar-item-wrapper">
            <div className="howto-hot-question-header-wrapper">
                <div className="item-header">
                    핫 게시물 &nbsp;
                    <WhatshotIcon style={{ fontSize: "14px" }} />
                </div>
            </div>
            <div className="item-list-wrapper">
                <div className="hot-question-list-items">{hotquestionList}</div>
            </div>
        </div>
    );
};

export default HotLinksModuleTemplate;
