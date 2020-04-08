import React, { useState, useEffect } from "react";
import { Collapse, Button, Input } from "reactstrap";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_COMMENT } from "../../../Mutation/mutations";
import MarkdownContent from "../../MarkdownContent/MarkdownContent";
import "./HowToContentQABox.css";
import { Link } from "react-router-dom";
import Tag from "../../Tag/Tag";
import MarkdownEditor from "../../MarkdownEditor/MarkdownEditor";
import RequireLoginBox from "../../RequireLoginBox/RequireLoginBox";

const HowToContentQABox = ({ _id, isQuestion, author, date, likes, content, tags, comments, question_id }) => {
    const [createComment] = useMutation(CREATE_COMMENT);
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => setIsOpen(!isOpen);
    const [commentValue, setCommentValue] = useState("");

    const IsQorAOutter = () => {
        if (isQuestion === "Q") {
            return <div className="is-question-box-q">Q</div>;
        } else {
            return <div className="is-question-box-a">A</div>;
        }
    };

    const IsQorAInner = () => {
        if (isQuestion === "Q") {
            return <div className="header-box-is-question-box-q">Q</div>;
        } else {
            return <div className="header-box-is-question-box-a">A</div>;
        }
    };
    const TagBox = () => {
        if (isQuestion === "Q") {
            const TagList = tags.map((tagItem) => <Tag key={tagItem} tagItem={tagItem}></Tag>);
            return <div className="tag-box">{TagList}</div>;
        } else {
            return <React.Fragment></React.Fragment>;
        }
    };
    const CommentList = comments.map(({ _id, author, content, date }) => (
        <div key={_id} className="comment-box">
            <span id="content">{content}&nbsp;</span>
            <span id="author">{author}&nbsp;</span>
            <span id="date">{date}</span>
        </div>
    ));
    const handleSubmit = async () => {
        createComment({
            variables: {
                token: window.sessionStorage.getItem("token"),
                question_id: question_id,
                answer_id: _id,
                author: window.sessionStorage.getItem("nickname"),
                content: commentValue,
            },
        })
            .then((response) => {
                console.log(response._id);
                if (response._id) {
                    alert("댓글을 달았습니다!");
                    // window.location.href = "http://localhost:3000/howto/question/" + question_id;
                } else {
                    alert("실패");
                }
            })
            .catch((err) => {
                alert(err.messeage);
            });
    };
    return (
        <React.Fragment>
            <div>
                <IsQorAOutter />
                <div className="question-box">
                    <div className="header-box">
                        <IsQorAInner />
                        <span>{author}</span>
                    </div>
                    <div className="main-box">
                        <div>
                            <MarkdownContent content={content} />
                        </div>
                        <div>
                            <TagBox />
                        </div>
                        <div className="add-comment-box">
                            <Link onClick={toggleCollapse}>Add Comment...</Link>
                        </div>
                    </div>
                    {CommentList}
                    <Collapse className="question-comment-warpper" isOpen={isOpen}>
                        <RequireLoginBox color={"dark"}>
                            <div className="comment-box">
                                <Input
                                    placeholder="Write.."
                                    value={commentValue}
                                    onChange={({ target: { value } }) => setCommentValue(value)}
                                    size="large"
                                    type="textarea"
                                ></Input>
                                <div id="comment-link">
                                    <Link onClick={handleSubmit}> > comment here</Link>
                                </div>
                            </div>
                        </RequireLoginBox>
                    </Collapse>
                </div>
            </div>
        </React.Fragment>
    );
};

export default HowToContentQABox;
