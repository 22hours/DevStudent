import React, { useState, useEffect } from "react";
import { useQuery } from "react-apollo";
import MypageTemplate from "page-template/MypageTemplate/MypageTemplate";
//import { FIND_ALL_ALARMS, FIND_QUESTIONS_BY_OPTION } from "query/queries";
import { Link } from "react-router-dom";
import NowLoading from "module/NowLoading/NowLoading";

import { POST, FIND_ALL_ALARMS, FIND_QUESTIONS_BY_OPTIONS } from "rest";

const AlarmPovider = () => {
    const localData = JSON.parse(localStorage.getItem("user"));
    const user = localData?.nickname;

    const [alarmData, setAlarmData] = useState();

    const getAlarmData = async () => {
        const data = await POST("post", FIND_ALL_ALARMS, {
            nickname: user,
            pageNum: 1,
            requiredCount: 10,
        });
        setAlarmData(data);
    };
    useEffect(() => {
        getAlarmData();
    }, [1]);

    if (alarmData) {
        return alarmData.map(({ _id, question_id, content, date, respondent }) => (
            <Link to={"/howto/question/" + question_id}>
                <div key={question_id} className="item-box">
                    <span id="item-label">{date}</span>
                    <p id="item-value">
                        {respondent} {content}
                    </p>
                </div>
            </Link>
        ));
    } else {
        return (
            <p>
                <NowLoading />
            </p>
        );
    }
};
const MyContentProvider = () => {
    const localData = JSON.parse(localStorage.getItem("user"));
    const user = localData?.nickname;
    const [questionData, setQuestionData] = useState();
    const getQuestionData = async () => {
        const data = await POST("post", FIND_QUESTIONS_BY_OPTIONS, {
            param: "date",
            option: "author",
            searchContent: user,
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
                        {title} <span>{views}</span>
                    </p>
                </div>
            </Link>
        ));
    } else {
        return (
            <p>
                <NowLoading />
            </p>
        );
    }
};

const MyPage = () => {
    const userAlarm = <AlarmPovider />;
    const myContent = <MyContentProvider />;
    const localData = JSON.parse(localStorage.getItem("user"));
    return <MypageTemplate localData={localData} userAlarm={userAlarm} myContent={myContent} />;
};
export default MyPage;
