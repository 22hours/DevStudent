import React, { useState } from "react";
import { Container, Row } from "reactstrap";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { findAllQuestionsByViews } from "../../query/queries";
import { useQuery } from "@apollo/react-hooks";

// css
import "./HowToSidebarComponent.css";

// module-template
import HotLinksModuleTemplate from "module-template/HotLinksModuleTemplate/HotLinksModuleTemplate";
import QuestionTagModuleTemplate from "module-template/QuestionTagModuleTemplate/QuestionTagModuleTemplate";

// items
import HotQuestionItem from "item/HotQuestionItem/HotQuestionItem";

const HowToSidebarComponent = ({ tag, handleNewQuestion }) => {
    const btn_style = {
        fontSize: "17px",
        color: "white",
        width: "100%",
    };

    const [param, setParam] = useState("views");
    const [requiredCount] = useState("10");
    const { loading, error, data } = useQuery(findAllQuestionsByViews, {
        variables: { param: param, requiredCount: requiredCount },
    });

    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error!</p>;

    const hotquestionList = (
        <div>
            {data.findAllQuestions.map(({ _id, title, views }) => (
                <HotQuestionItem id={_id} key={_id} title={title} views={views}></HotQuestionItem>
            ))}
        </div>
    );

    return (
        <React.Fragment>
            <div className="howto-sidebar-wrapper pc-only">
                <div>
                    <Link to="/newquestion" style={btn_style}>
                        <Button
                            onClick={handleNewQuestion}
                            className="new-question-button"
                            color="info"
                            style={btn_style}
                        >
                            NewQuestion!
                        </Button>
                    </Link>
                </div>
                <div>
                    <QuestionTagModuleTemplate tag={tag}></QuestionTagModuleTemplate>
                </div>
                <div>
                    <HotLinksModuleTemplate hotquestionList={hotquestionList}></HotLinksModuleTemplate>
                </div>
            </div>
            <div style={{ marginBottom: "3.5%" }}></div>
        </React.Fragment>
    );
};

export default HowToSidebarComponent;
