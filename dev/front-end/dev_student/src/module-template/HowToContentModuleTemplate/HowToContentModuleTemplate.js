import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import { useQuery } from "@apollo/react-hooks";
import ServerError from "pages/ServerError";
import CircularProgress from "@material-ui/core/CircularProgress";

// css
import "./HowToContentModuleTemplate.css";

// queries
import { findQuestionBy_id_Query } from "query/queries";

// context

// module templates
import AnswersModuleTemplate from "module-template/AnswersModuleTemplate/AnswersModuleTemplate";

// module
import ContentHeaderModule from "module/ContentHeaderModule/ContentHeaderModule";
import MarkdownAnswerModule from "module/MarkdownAnswerModule/MarkdownAnswerModule";
import HowToQABox from "module/HowToQABox/HowToQABox";
import RequireLoginBoxModule from "module/RequireLoginBoxModule/RequireLoginBoxModule";
// utils
import { timeForToday } from "util/time";

// Queries
import { POST, FIND_QUESTION_BY_ID } from "rest";

const HowToContentModuleTemplate = ({ match }) => {
    const [questionData, setQuestionData] = useState(null);
    const [mine, setMine] = useState();
    const nickname = JSON.parse(localStorage.getItem("user"))?.nickname;

    const getQuetsionData = async () => {
        const data = await POST("post", FIND_QUESTION_BY_ID, { _id: match.params.id });
        setQuestionData(data);
        if (data) {
            if (data?.author?.nickname === nickname) {
                setMine(true);
            }
        }
    };
    useEffect(() => {
        getQuetsionData();
    }, [1]);

    if (questionData !== null) {
        return (
            <React.Fragment>
                <div className="HowToContentModuleTemplate">
                    <div className="left-line"></div>
                    <Container className="how-to-content-header">
                        <ContentHeaderModule
                            adoptedAnswerId={questionData?.adoptedAnswerId}
                            mine={mine}
                            authorGrade={questionData?.author?.grade}
                            _id={questionData?._id}
                            title={questionData?.title}
                            authorNickname={questionData?.author?.nickname}
                            date={questionData?.date}
                            dateToText={timeForToday(questionData?.date)}
                            views={questionData?.views}
                            isLiked={questionData?.isLiked}
                            likesCount={questionData?.likesCount}
                        ></ContentHeaderModule>
                    </Container>
                    <Container className="how-to-content margin-top-3">
                        <HowToQABox
                            key={"0"}
                            tags={questionData?.tags}
                            _id={match.params.id}
                            isQuestion={"Q"}
                            authorNickname={questionData?.author?.nickname}
                            date={questionData?.date}
                            question_id={match.params.id}
                            likesCount={questionData?.likesCount}
                            content={questionData?.content}
                            comments={questionData?.comments}
                            isLiked={questionData?.isLiked}
                            adoptedAnswerId={questionData?.adoptedAnswerId}
                            authorGrade={questionData?.author?.grade}
                        ></HowToQABox>
                        <AnswersModuleTemplate
                            id={match.params.id}
                            data={questionData?.answers}
                            adoptedAnswerId={questionData?.adoptedAnswerId}
                            questionAuthorNickname={questionData?.author?.nickname}
                        />
                    </Container>
                    <Container className="how-to-reply-answer-wrapper">
                        <RequireLoginBoxModule>
                            <MarkdownAnswerModule id={match.params.id} />
                        </RequireLoginBoxModule>
                    </Container>
                </div>
            </React.Fragment>
        );
    } else {
        return (
            <p>
                <CircularProgress />
                <br />
                로딩중입니다 잠시만 기다려주세요..
            </p>
        );
    }
};

export default HowToContentModuleTemplate;
