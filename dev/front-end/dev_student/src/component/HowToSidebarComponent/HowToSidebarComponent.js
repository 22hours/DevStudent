import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { findAllQuestionsByViews } from "query/queries";
import { useQuery } from "@apollo/react-hooks";
import CircularProgress from "@material-ui/core/CircularProgress";

// css
import "./HowToSidebarComponent.css";

// module-template
import HotLinksModuleTemplate from "module-template/HotLinksModuleTemplate/HotLinksModuleTemplate";
import QuestionTagModuleTemplate from "module-template/QuestionTagModuleTemplate/QuestionTagModuleTemplate";
import JobInfoModuleTemplate from "module-template/JobInfoModuleTemplate/JobInfoModuleTemplate";

// items
import HotQuestionItem from "item/HotQuestionItem/HotQuestionItem";

// Queries
import { POST, FIND_ALL_QUESTIONS } from "rest";

const HowToSidebarComponent = ({ tag, handleNewQuestion }) => {
    const btn_style = {
        fontSize: "20px",
        color: "white",
        width: "100%",
    };
    const requiredCount = "10";

    const [hotquestionList, setHotquestionList] = useState();
    const getLikesData = async () => {
        const data = await POST("post", FIND_ALL_QUESTIONS, {
            param: "likesCount",
            requiredCount: requiredCount,
            pageNum: "1",
        });
        console.log(data);
        setHotquestionList(
            data?.map(({ _id, title, likesCount }) => (
                <HotQuestionItem id={_id} key={_id} title={title} likesCount={likesCount}></HotQuestionItem>
            ))
        );
    };
    useEffect(() => {
        getLikesData();
    }, [1]);

    return (
        <React.Fragment>
            <div className="howto-sidebar-wrapper pc-only">
                <div>
                    <Link to="/newquestion" style={btn_style}>
                        <Button onClick={handleNewQuestion} id="new-question-button" color="info" style={btn_style}>
                            New Question
                        </Button>
                    </Link>
                </div>
                <div>
                    <QuestionTagModuleTemplate tag={tag}></QuestionTagModuleTemplate>
                </div>
                <div>
                    <HotLinksModuleTemplate hotquestionList={hotquestionList}></HotLinksModuleTemplate>
                </div>
                <div>
                    <JobInfoModuleTemplate />
                </div>
            </div>
            <div style={{ marginBottom: "3.5%" }}></div>
        </React.Fragment>
    );
};

export default HowToSidebarComponent;
