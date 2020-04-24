import React, { useContext } from "react";
import { Container } from "reactstrap";
import { useQuery } from "@apollo/react-hooks";

// css
import "./HowToContentModuleTemplate.css";

// queries
import { findQuestionBy_id_Query } from "query/queries";

// context

// module
import ContentHeaderModule from "module/ContentHeaderModule/ContentHeaderModule";
import MarkdownAnswerModule from "module/MarkdownAnswerModule/MarkdownAnswerModule";
import HowToQABox from "module/HowToQABox/HowToQABox";
import RequireLoginBoxModule from "module/RequireLoginBoxModule/RequireLoginBoxModule";

const HowToContentModuleTemplate = ({ match }) => {
    const nickname = window.localStorage.getItem("nickname");
    const { loading, error, data } = useQuery(findQuestionBy_id_Query, {
        variables: { _id: match.params.id },
    });
    if (loading) return <p>Loading ...</p>;
    if (error) return <p>error!</p>;
    var mine = false;
    if (data.findQuestionBy_id.author === nickname) {
        mine = true;
    }

    const answers = data.findQuestionBy_id.answers.map(({ _id, author, content, date, comments }) => (
        <HowToQABox
            _id={_id}
            key={_id}
            author={author}
            date={date}
            isQuestion={"A"}
            content={content}
            comments={comments}
            question_id={match.params.id}
        />
    ));
    return (
        <React.Fragment>
            <div className="HowToContentModuleTemplate">
                <div className="left-line"></div>
                <Container className="how-to-content-header">
                    <ContentHeaderModule
                        solved={data.findQuestionBy_id.solved}
                        mine={mine}
                        _id={data.findQuestionBy_id._id}
                        title={data.findQuestionBy_id.title}
                        author={data.findQuestionBy_id.author}
                        date={data.findQuestionBy_id.date}
                        views={data.findQuestionBy_id.views}
                    ></ContentHeaderModule>
                </Container>

                <Container className="how-to-content margin-top-3">
                    <HowToQABox
                        key={"0"}
                        tags={data.findQuestionBy_id.tags}
                        _id={match.params.id}
                        isQuestion={"Q"}
                        author={data.findQuestionBy_id.author}
                        date={data.findQuestionBy_id.date}
                        question_id={match.params.id}
                        likes={"3"}
                        content={data.findQuestionBy_id.content}
                        comments={data.findQuestionBy_id.comments}
                    ></HowToQABox>
                    {answers}
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
