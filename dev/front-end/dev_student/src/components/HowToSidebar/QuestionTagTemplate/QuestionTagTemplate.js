import React, { Component } from "react";
import QuestionTagHeader from "../QuestionTagHeader/QuestionTagHeader";
import "./QuestionTagTemplate.css";
import QuestionTagList from "../QuestionTagList/QuestionTagList";

class QuestionTagTemplate extends Component {
  render() {
    const { tag } = this.props;

    return (
      <div className="question-tag-wrapper">
        <div className="question-tag-header-wrapper">
          <QuestionTagHeader />
        </div>
        <div className="question-tag-list-wrapper">
          <QuestionTagList tag={tag}></QuestionTagList>
        </div>
      </div>
    );
  }
}
export default QuestionTagTemplate;
