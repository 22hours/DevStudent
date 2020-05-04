import React from "react";
import { useQuery } from "react-apollo";
import MypageTemplate from "page-template/MypageTemplate/MypageTemplate";
import { FIND_ALL_ALARMS, FIND_QUESTIONS_BY_OPTION } from "query/queries";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

const AlarmPovider = () => {
    const localData = JSON.parse(localStorage.getItem("user"));
    const user = localData?.nickname;
    const { loading, error, data } = useQuery(FIND_ALL_ALARMS, {
        variables: { nickname: user, pageNum: 1, requiredCount: 10 },
    });
    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error!</p>;
    return data.findAllAlarms.map(({ _id, question_id, content, date, respondent }) => (
        <Link to={"/howto/question/" + question_id}>
            <div key={question_id} className="item-box">
                <span id="item-label">{date}</span>
                <p id="item-value">
                    {respondent} {content}
                </p>
            </div>
        </Link>
    ));
};
const MyContentProvider = () => {
    const localData = JSON.parse(localStorage.getItem("user"));
    const user = localData?.nickname;
    const { loading, error, data } = useQuery(FIND_QUESTIONS_BY_OPTION, {
        variables: { param: "date", option: "author", searchContent: user, pageNum: 1, requiredCount: 10 },
    });
    if (loading)
        return (
            <div>
                <CircularProgress disableShrink size={24} />
            </div>
        );
    if (error) return <p>Error!</p>;
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
const MyPage = () => {
    const alramData = <AlarmPovider />;
    const myContent = <MyContentProvider />;
    const localData = JSON.parse(localStorage.getItem("user"));
    return <MypageTemplate localData={localData} alarmData={alramData} myContent={myContent} />;
};
export default MyPage;
