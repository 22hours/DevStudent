import React, { useState, useEffect } from "react";
import { Collapse, Input } from "reactstrap";
import { useMutation } from "@apollo/react-hooks";
import "./HowToQABox.css";
import { Link } from "react-router-dom";

import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import RequireLoginBoxModule from "../RequireLoginBoxModule/RequireLoginBoxModule";
import AuthorGradeModule from "module/AuthorGradeModule/AuthorGradeModule";

// atoms
import Tag from "atom/Tag/Tag";
import MarkdownParser from "atom/MarkdownParser/MarkdownParser";

// apollo
import { CREATE_LIKE, CREATE_COMMENT, UPDATE_ADOPTED_ANSWER_ID } from "mutation/mutations";

// utils
import { timeForToday } from "util/time";

const QABoxComment = ({ comments }) => {
    const [commentList, setCommentList] = useState();
    useEffect(() => {
        setCommentList(
            comments.map(({ _id, author, content, date }) => (
                <div key={_id} className="comment-box">
                    <a href={"/userinfo/" + author}>
                        <span id={"author"}>{author}&nbsp;</span>
                    </a>
                    &nbsp;
                    <span id="content">{content}</span>
                    &nbsp; &nbsp;
                    <span id="date">{timeForToday(date)}</span>
                </div>
            ))
        );
    }, [1]);
    return <React.Fragment>{commentList}</React.Fragment>;
};

const HowToQABox = ({
    _id,
    isQuestion,
    authorNickname,
    questionAuthorNickname,
    date,
    dateToText,
    isLiked,
    content,
    tags,
    comments,
    question_id,
    adoptedAnswerId,
    likesCount,
    authorGrade,
}) => {
    const nickname = JSON.parse(localStorage.getItem("user"))?.nickname;
    const [createComment, { loading: loadingComment, error: errorComment }] = useMutation(CREATE_COMMENT);
    const [updateAdoptedAnswerId, { loading: loadingAdopt, error: errorAdopt }] = useMutation(UPDATE_ADOPTED_ANSWER_ID);
    const [createLike, { loading: loadingLike, error: errorLike }] = useMutation(CREATE_LIKE);
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => setIsOpen(!isOpen);
    const [commentValue, setCommentValue] = useState("");
    const [gradeColor, setGradeColor] = useState("");
    const IsQorAOutter = () => {
        if (isQuestion === "Q") {
            return <div className="is-question-box-q">Q</div>;
        } else {
            return (
                <div
                    onClick={handleAdopt}
                    className={"is-question-box-a clickable " + (adoptedAnswerId === _id ? "adopt" : "notadopt")}
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
                    onClick={handleAdopt}
                    className={
                        "header-box-is-question-box-a clickable " + (adoptedAnswerId === _id ? "adopt" : "notadopt")
                    }
                >
                    A
                </div>
            );
        }
    };
    const TagBox = () => {
        if (isQuestion === "Q") {
            const TagList = tags?.map((tagItem) => <Tag key={tagItem} tagItem={tagItem}></Tag>);
            return <div className="tag-box">{TagList}</div>;
        } else {
            return <React.Fragment></React.Fragment>;
        }
    };

    const handleSubmit = async () => {
        createComment({
            variables: {
                question_id: question_id,
                answer_id: isQuestion === "Q" ? "Question" : _id,
                author: nickname,
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
    const handleAdopt = async () => {
        var adoptReturn = null;
        if (nickname !== questionAuthorNickname) {
            return;
        }
        if (adoptedAnswerId === null) adoptReturn = window.confirm("이 댓글을 채택하시겠습니까?");
        else {
            window.alert("이미 채택된 답변이 있습니다");
            return;
        }
        if (adoptReturn) {
            updateAdoptedAnswerId({
                variables: {
                    question_id: question_id,
                    answer_id: _id,
                    nickname: nickname,
                },
            })
                .then((response) => {
                    alert("해당 답변을 채택하였습니다!");
                    window.location.href = "/howto/question/" + question_id;
                })
                .catch((err) => {
                    alert(err.messeage);
                });
        }
    };
    const handleEmote = (status) => {
        const auth = localStorage.getItem("auth");
        if (auth) {
            createLike({
                variables: {
                    question_id: question_id,
                    answer_id: isQuestion === "Q" ? "Question" : _id,
                    nickname: nickname,
                    status: status,
                },
            })
                .then((response) => {
                    window.location.href = "/howto/question/" + question_id;
                })
                .catch((error) => alert(error.messeage));
        } else {
            window.location.href = "/login";
        }
    };

    const LikesBoxOutter = () => {
        return (
            <React.Fragment>
                <div className={"likes-outter " + (isLiked === "none" ? "able" : "disable")}>
                    <div className={"likes-count-up " + (isLiked === "up" ? "liked" : "notClicked")}>
                        <p onClick={() => handleEmote("up")}>
                            <ArrowDropUpIcon style={{ fontSize: 30 }} />
                        </p>
                    </div>
                    <div className="likes-count-box">{likesCount}</div>
                    <div className={"likes-count-down " + (isLiked === "down" ? "disliked" : "notClicked")}>
                        <p onClick={() => handleEmote("down")}>
                            <ArrowDropDownIcon style={{ fontSize: 30 }} />
                        </p>
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
                        <p onClick={() => handleEmote("up")}>
                            <ThumbUpIcon style={{ fontSize: 15 }} color="action" />
                        </p>
                    </div>
                    <div className={"likes-count-down " + (isLiked === "down" ? "disliked" : "notClicked")}>
                        <p onClick={() => handleEmote("down")}>
                            <ThumbDownIcon style={{ fontSize: 15 }} color="action" />
                        </p>
                    </div>
                </div>
            </React.Fragment>
        );
    };

    return (
        <div>
            {/* <div className="adopt-popup-layer">레레레</div> */}
            <div className="HowToQABox">
                <div className="qa-status-box">
                    <IsQorAOutter />
                    <LikesBoxOutter />
                </div>
                <div className="question-box">
                    <div className="header-box">
                        <IsQorAInner />
                        <a href={"/userinfo/" + authorNickname}>
                            <AuthorGradeModule authorNickname={authorNickname} authorGrade={authorGrade} />
                        </a>
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
                            <span onClick={toggleCollapse}> Add Comment</span>
                        </div>
                    </div>
                    <QABoxComment comments={comments} />
                    <Collapse className="question-comment-warpper" isOpen={isOpen}>
                        <RequireLoginBoxModule color="info">
                            <div className="comment-box">
                                <Input
                                    placeholder="Write.."
                                    value={commentValue}
                                    onChange={({ target: { value } }) => setCommentValue(value)}
                                    type="textarea"
                                ></Input>
                                <div id="comment-link">
                                    <span
                                        style={{
                                            float: "right",
                                            fontSize: "12px",
                                            paddingTop: "4px",
                                            paddingBottom: "4px",
                                            cursor: "pointer",
                                        }}
                                        onClick={handleSubmit}
                                    >
                                        {" "}
                                        > Submit
                                    </span>
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
