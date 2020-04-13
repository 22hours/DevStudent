import React from "react";
import "./HowToRuleContentItem.css";
const HowToRuleContentItem = ({ nowClicked }) => {
    const ContentRender = ({ children }) => {
        switch (nowClicked) {
            case 1:
                return (
                    <React.Fragment>
                        <div className="content-img-div"></div>
                    </React.Fragment>
                );
            case 2:
                return <React.Fragment>voteAnswer</React.Fragment>;
            case 3:
                return <React.Fragment>replyAnswer</React.Fragment>;
            case 4:
                return <React.Fragment>growUp</React.Fragment>;
            case 5:
                return <React.Fragment>acceptAnswer</React.Fragment>;
            case 6:
                return <React.Fragment>hashTagging</React.Fragment>;

            default:
                return <React.Fragment>newQuestion</React.Fragment>;
        }
    };
    return (
        <React.Fragment>
            <div className="HowToRuleContentItem">
                <ContentRender />
            </div>
        </React.Fragment>
    );
};
export default HowToRuleContentItem;
