import React, { useState } from "react";
import { Collapse, Input } from "reactstrap";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_COMMENT } from "mutation/mutations";
import "./HowToQABox.css";
import { Link } from "react-router-dom";

import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import DoneIcon from "@material-ui/icons/Done"; // modules
import RequireLoginBoxModule from "../RequireLoginBoxModule/RequireLoginBoxModule";

// atoms
import Tag from "atom/Tag/Tag";
import MarkdownParser from "atom/MarkdownParser/MarkdownParser";

const HowToQABox = ({ _id, isQuestion, author, date, likes, content, tags, comments, question_id, solved }) => {
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
                question_id: question_id,
                answer_id: _id,
                author: window.localStorage.getItem("nickname"),
                content: commentValue,
            },
        })
            .then((response) => {
                alert("댓글을 달았습니다!");
                window.location.href = "/howto/question/" + question_id;
            })
            .catch((err) => {
                alert(err.messeage);
            });
    };

    const LikesBoxOutter = () => {
        return (
            <React.Fragment>
                <div className="likes-outter">
                    <div className="likes-count-up">
                        <Link style={{ color: "gray" }}>
                            <ArrowDropUpIcon style={{ fontSize: 30 }} />
                        </Link>
                    </div>
                    <div className="likes-count-box">13</div>
                    <div className="likes-count-down">
                        <Link style={{ color: "gray" }}>
                            <ArrowDropDownIcon style={{ fontSize: 30 }} />
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    const LikesBoxInner = () => {
        return (
            <React.Fragment>
                <div className="likes-inner">
                    <div className="likes-count-box">50</div>
                    <div className="likes-count-up">
                        <Link style={{ color: "gray" }}>
                            <ThumbUpIcon style={{ fontSize: 15 }} color="action" />
                        </Link>
                    </div>
                    <div className="likes-count-down">
                        <Link style={{ color: "gray" }}>
                            <ThumbDownIcon style={{ fontSize: 15 }} color="action" />
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        );
    };
    const SolvedBoxOutter = () => {
        if (solved === _id) {
            return (
                <React.Fragment>
                    <div className="solved-outter">
                        <Link style={{ color: "green" }}>
                            <DoneIcon />
                        </Link>
                    </div>
                </React.Fragment>
            );
        }
        if (isQuestion === "Q") {
            return <React.Fragment></React.Fragment>;
        } else {
            return (
                <React.Fragment>
                    <div className="solved-outter">
                        <Link style={{ color: "rgb(98, 98, 98);" }}>
                            <DoneIcon />
                        </Link>
                    </div>
                </React.Fragment>
            );
        }
    };
    return (
        <React.Fragment>
            <div>
                <div className="qa-status-box">
                    <IsQorAOutter />
                    <LikesBoxOutter />
                    <SolvedBoxOutter />
                </div>
                <div className="question-box">
                    <div className="header-box">
                        <IsQorAInner />
                        <span>{author}</span>
                        <LikesBoxInner />
                    </div>
                    <div className="main-box">
                        <div>
                            <MarkdownParser content={content} />
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
                        <RequireLoginBoxModule color="info">
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
                        </RequireLoginBoxModule>
                    </Collapse>
                </div>
            </div>
        </React.Fragment>
    );
};

export default HowToQABox;
