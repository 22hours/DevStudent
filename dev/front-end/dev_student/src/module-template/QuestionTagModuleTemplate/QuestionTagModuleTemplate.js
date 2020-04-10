import React, { Component } from "react";
import "./QuestionTagModuleTemplate.css";

// items
import QuestionTagItem from "item/QuestionTagItem/QuestionTagItem";

class QuestionTagModuleTemplate extends Component {
    render() {
        const { tag } = this.props;
        const taglist = tag.map(({ idx, tagname, tagcount }) => (
            <QuestionTagItem idx={idx} tagname={tagname} tagcount={tagcount} key={tagname}></QuestionTagItem>
        ));
        return (
            <div className="question-tag-wrapper">
                <div className="question-tag-header-wrapper">
                    <div className="question-tag-header">Tags</div>{" "}
                </div>
                <div className="question-tag-list-wrapper">
                    <div>{taglist}</div>
                </div>
            </div>
        );
    }
}
export default QuestionTagModuleTemplate;
