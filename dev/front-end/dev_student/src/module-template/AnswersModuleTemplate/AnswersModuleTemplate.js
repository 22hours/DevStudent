import React, { useState, useEffect } from "react";
import HowToQABox from "module/HowToQABox/HowToQABox";
import { timeForToday } from "util/time";

const AnswersModuleTemplate = ({ data, id, adoptedAnswerId, questionAuthorNickname }) => {
    const [items, setItems] = useState();
    useEffect(() => {
        const resItems = data.map(({ _id, author, content, date, comments, isLiked, likesCount, grade }) => (
            <HowToQABox
                _id={_id}
                key={_id}
                authorNickname={author.nickname}
                questionAuthorNickname={questionAuthorNickname}
                date={date}
                dateToText={timeForToday(date)}
                isQuestion={"A"}
                content={content}
                comments={comments}
                question_id={id}
                adoptedAnswerId={adoptedAnswerId}
                isLiked={isLiked}
                likesCount={likesCount}
                authorGrade={author.grade}
            />
        ));
        setItems(resItems);
    }, [1]);
    return <React.Fragment>{items}</React.Fragment>;
};

export default AnswersModuleTemplate;
