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
import RequireLoginBoxModule from "../RequireLoginBoxModule/RequireLoginBoxModule";
import { confirmAlert } from "react-confirm-alert"; // Import
import DoneIcon from "@material-ui/icons/Done";

// atoms
import Tag from "atom/Tag/Tag";
import MarkdownParser from "atom/MarkdownParser/MarkdownParser";

const HowToQABox = ({
    _id,
    isQuestion,
    author,
    date,
    isLiked,
    content,
    tags,
    comments,
    question_id,
    solved,
    likesCount,
}) => {
    const [createComment] = useMutation(CREATE_COMMENT);
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => setIsOpen(!isOpen);
    const [commentValue, setCommentValue] = useState("");
    const IsQorAOutter = () => {
        if (isQuestion === "Q") {
            return <div className="is-question-box-q">Q</div>;
        } else {
            return (
                <div
                    onClick={adoptThisAnswer}
                    className={"is-question-box-a clickable " + (solved ? "adopt" : "notadopt")}
                >
                    A
                </div>
            );
        }
    };

    const IsQorAInner = () => {
        if (isQuestion === "Q") {
            return <div className="header-box-is-question-box-q">Q</div>;
        } else {
            return (
                <div
                    onClick={adoptThisAnswer}
                    className={"header-box-is-question-box-a clickable " + (solved ? "adopt" : "notadopt")}
                >
                    A
                </div>
            );
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
            <span id={"author"}>{author}&nbsp;</span>
            &nbsp;
            <span id="content">{content}</span>
            &nbsp; &nbsp;
            <span id="date">{date}</span>
        </div>
    ));
    const handleSubmit = async () => {
        createComment({
            variables: {
                question_id: question_id,
                answer_id: isQuestion === "Q" ? "Question" : _id,
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
                <div className={"likes-outter " + (isLiked === "none" ? "able" : "disable")}>
                    <div className={"likes-count-up " + (isLiked === "up" ? "liked" : "notClicked")}>
                        <Link onClick={() => emoteThisQABox("up")}>
                            <ArrowDropUpIcon style={{ fontSize: 30 }} />
                        </Link>
                    </div>
                    <div className="likes-count-box">{likesCount}</div>
                    <div className={"likes-count-down " + (isLiked === "down" ? "disliked" : "notClicked")}>
                        <Link onClick={() => emoteThisQABox("down")}>
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
                <div className={"likes-inner " + (isLiked === "none" ? "able" : "disable")}>
                    <div className="likes-count-box">{likesCount}</div>
                    <div className={"likes-count-up " + (isLiked === "up" ? "liked" : "notClicked")}>
                        <Link onClick={() => emoteThisQABox("up")}>
                            <ThumbUpIcon style={{ fontSize: 15 }} color="action" />
                        </Link>
                    </div>
                    <div className={"likes-count-down " + (isLiked === "down" ? "disliked" : "notClicked")}>
                        <Link onClick={() => emoteThisQABox("down")}>
                            <ThumbDownIcon style={{ fontSize: 15 }} color="action" />
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    const adoptThisAnswer = () => {
        var adoptReturn = null;
        if (!solved) adoptReturn = window.confirm("이 댓글을 채택하시겠습니까?");
        else {
            window.alert("이미 채택된 답변이 있습니다");
            return;
        }
    };

    const emoteThisQABox = (emote) => {
        const auth = localStorage.getItem("auth");
        if (auth) {
            alert("success!");
        } else {
            window.location.href = "/login";
        }
    };
    return (
        <div>
            {/* <div className="adopt-popup-layer">레레레</div> */}
            <div className={"HowToQABox"}>
                <div className={"qa-status-box"}>
                    <IsQorAOutter />
                    <LikesBoxOutter />
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
        </div>
    );
};

export default HowToQABox;
