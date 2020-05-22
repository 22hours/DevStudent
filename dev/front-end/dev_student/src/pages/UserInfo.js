import React, { useState, useEffect } from "react";
import UserInfoPageTemplate from "page-template/UserInfoPageTemplate/UserInfoPageTemplate";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import ServerError from "pages/ServerError";

//Queries
import { POST, FIND_QUESTIONS_BY_OPTIONS, FIND_USER_BY_NICKNAME } from "rest";

const UserContentProvider = ({ nickname }) => {
    const [questionData, setQuestionData] = useState();
    const getQuestionData = async () => {
        const data = await POST("post", FIND_QUESTIONS_BY_OPTIONS, {
            param: "date",
            option: "author",
            searchContent: nickname,
            pageNum: 1,
            requiredCount: 10,
        });
        setQuestionData(data);
    };
    useEffect(() => {
        getQuestionData();
    }, [1]);
    if (questionData) {
        return questionData.map(({ _id, title, content, date, answerCount, likesCount, views }) => (
            <Link to={"/howto/question/" + _id}>
                <div key={_id} className="item-box">
                    <span id="item-label">{date}</span>
                    <p id="item-value">
                        {title} {views}
                    </p>
                </div>
            </Link>
        ));
    } else {
        return <p>loading</p>;
    }
};

const UserInfo = ({ match }) => {
    const username = match.params.username;
    const userContent = <UserContentProvider nickname={username}></UserContentProvider>;
    const [myData, setMyData] = useState();
    const getMyData = async () => {
        const data = await POST("post", FIND_USER_BY_NICKNAME, { nickname: username });
        setMyData(data);
    };
    useEffect(() => {
        getMyData();
    }, [1]);

    return (
        <UserInfoPageTemplate
            email={myData?.email}
            key={myData?.email}
            gitLink={myData?.gitLink}
            nickname={myData?.nickname}
            grade={myData?.grade}
            point={myData?.point}
            userContent={userContent}
        />
    );
};

export default UserInfo;
