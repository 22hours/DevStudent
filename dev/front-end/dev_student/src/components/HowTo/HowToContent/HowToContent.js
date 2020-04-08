import React, { useContext } from "react";
import { Container } from "reactstrap";
import { useQuery } from "@apollo/react-hooks";
import HowToContentHeader from "../HowToContentHeader/HowToContentHeader";
import "./HowToContent.css";
import { findQuestionBy_id_Query } from "../../../query/queries";
import UserContext from "../../../Context/UserContext";
import ReplyAnswer from "../ReplyAnswer/ReplyAnswer";
import HowToContentQABox from "../HowToContentQABox/HowToContentQABox";
import RequireLoginBox from "../../RequireLoginBox/RequireLoginBox";
const HowToContent = ({ match }) => {
    const { user } = useContext(UserContext);
    const { loading, error, data } = useQuery(findQuestionBy_id_Query, {
        variables: { _id: match.params.id },
    });
    if (loading) return <p>Loading ...</p>;
    var mine = false;
    if (data.findQuestionBy_id.author === user) {
        mine = true;
    }

    const answers = data.findQuestionBy_id.answers.map(({ _id, author, content, date, comments }) => (
        <HowToContentQABox
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
            <div className="left-line"></div>
            <Container className="margin-top-3 how-to-content-header">
                <HowToContentHeader
                    solved={data.findQuestionBy_id.solved}
                    mine={mine}
                    _id={data.findQuestionBy_id._id}
                    title={data.findQuestionBy_id.title}
                    author={data.findQuestionBy_id.author}
                    date={data.findQuestionBy_id.date}
                    views={data.findQuestionBy_id.views}
                ></HowToContentHeader>
            </Container>

            <Container className="how-to-content margin-top-3">
                <HowToContentQABox
                    key={"0"}
                    tags={data.findQuestionBy_id.tags}
                    _id={match.params.id}
                    isQuestion={"Q"}
                    author={data.findQuestionBy_id.author}
                    date={data.findQuestionBy_id.date}
                    likes={"3"}
                    content={data.findQuestionBy_id.content}
                    comments={data.findQuestionBy_id.comments}
                ></HowToContentQABox>
                {answers}
            </Container>
            <Container className="how-to-reply-answer-wrapper">
                <RequireLoginBox>
                    <ReplyAnswer />
                </RequireLoginBox>
            </Container>
        </React.Fragment>
    );
};

export default HowToContent;
