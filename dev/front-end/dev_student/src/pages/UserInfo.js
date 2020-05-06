import React from "react";
import UserInfoPageTemplate from "page-template/UserInfoPageTemplate/UserInfoPageTemplate";
import { useQuery } from "@apollo/react-hooks";
import { FIND_USER_BY_NICKNAME, FIND_QUESTIONS_BY_OPTION } from "query/queries";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import ServerError from "pages/ServerError";

const UserContentProvider = ({ nickname }) => {
    const { loading, error, data } = useQuery(FIND_QUESTIONS_BY_OPTION, {
        variables: { param: "date", option: "author", searchContent: nickname, pageNum: 1, requiredCount: 10 },
    });
    if (loading)
        return (
            <div>
                <CircularProgress disableShrink size={24} />
            </div>
        );
    if (error) return <ServerError />;
    return data.findQuestionsByOption.map(({ _id, title, content, date, answerCount, likesCount, views }) => (
        <Link to={"/howto/question/" + _id}>
            <div key={_id} className="item-box">
                <span id="item-label">{date}</span>
                <p id="item-value">
                    {title} {views}
                </p>
            </div>
        </Link>
    ));
};

const UserInfo = ({ match }) => {
    const username = match.params.username;
    const userContent = <UserContentProvider nickname={username}></UserContentProvider>;
    const { loading, error, data } = useQuery(FIND_USER_BY_NICKNAME, {
        variables: { nickname: username },
    });
    if (loading)
        return (
            <div>
                <CircularProgress />
            </div>
        );
    if (error) return <ServerError />;
    const Response = data.findUserByNickname;
    return (
        <UserInfoPageTemplate
            email={Response.email}
            key={Response.email}
            gitLink={Response.gitLink}
            nickname={Response.nickname}
            grade={Response.grade}
            point={Response.point}
            userContent={userContent}
        />
    );
};

export default UserInfo;
