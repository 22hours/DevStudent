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

const HowToContentModuleTemplate = ({ match }) => {
    const nickname = JSON.parse(localStorage.getItem("user"))?.nickname;
    const { loading, error, data } = useQuery(findQuestionBy_id_Query, {
        variables: { _id: match.params.id },
    });
    if (loading)
        return (
            <div>
                <CircularProgress />
            </div>
        );
    if (error) return <ServerError />;
    var mine = false;
    if (data.findQuestionBy_id.author === nickname) {
        mine = true;
    }
    return (
        <React.Fragment>
            <div className="HowToContentModuleTemplate">
                <div className="left-line"></div>
                <Container className="how-to-content-header">
                    <ContentHeaderModule
                        adoptedAnswerId={data.findQuestionBy_id.adoptedAnswerId}
                        mine={mine}
                        _id={data.findQuestionBy_id._id}
                        title={data.findQuestionBy_id.title}
                        authorNickname={data.findQuestionBy_id.author.nickname}
                        date={data.findQuestionBy_id.date}
                        dateToText={timeForToday(data.findQuestionBy_id.date)}
                        views={data.findQuestionBy_id.views}
                        isLiked={data.findQuestionBy_id.isLiked}
                        likesCount={data.findQuestionBy_id.likesCount}
                    ></ContentHeaderModule>
                </Container>
                <Container className="how-to-content margin-top-3">
                    <HowToQABox
                        key={"0"}
                        tags={data.findQuestionBy_id.tags}
                        _id={match.params.id}
                        isQuestion={"Q"}
                        authorNickname={data.findQuestionBy_id.author.nickname}
                        date={data.findQuestionBy_id.date}
                        question_id={match.params.id}
                        likesCount={data.findQuestionBy_id.likesCount}
                        content={data.findQuestionBy_id.content}
                        comments={data.findQuestionBy_id.comments}
                        isLiked={data.findQuestionBy_id.isLiked}
                        adoptedAnswerId={data.findQuestionBy_id.adoptedAnswerId}
                    ></HowToQABox>
                    <AnswersModuleTemplate
                        id={match.params.id}
                        data={data.findQuestionBy_id.answers}
                        adoptedAnswerId={data.findQuestionBy_id.adoptedAnswerId}
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
};

export default HowToContentModuleTemplate;
