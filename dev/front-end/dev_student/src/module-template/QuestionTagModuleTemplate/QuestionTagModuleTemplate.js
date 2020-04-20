import React from "react";
import "./QuestionTagModuleTemplate.css";
import { COUNT_TAGS } from "query/queries";
import { useQuery } from "@apollo/react-hooks";

// items
import QuestionTagItem from "item/QuestionTagItem/QuestionTagItem";

//icons
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

const QuestionTagModuleTemplate = ({ tag }) => {
    const taglist = tag.map(({ idx, tagname, tagcount }) => (
        <QuestionTagItem idx={idx} tagname={tagname} tagcount={tagcount} key={tagname}></QuestionTagItem>
    ));
    return (
        <div className="question-tag-wrapper">
            <div className="question-tag-header-wrapper">
                <div className="question-tag-header">
                    태그 <LocalOfferIcon style={{ fontSize: "14px" }} />
                </div>{" "}
            </div>
            <div className="question-tag-list-wrapper">
                <div>{taglist}</div>
            </div>
        </div>
    );
};
export default QuestionTagModuleTemplate;
