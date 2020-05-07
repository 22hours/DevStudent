import React, { useState, useEffect } from "react";
import HowToQABox from "module/HowToQABox/HowToQABox";
import { timeForToday } from "util/time";

const AnswersModuleTemplate = ({ data, id, adoptedAnswerId }) => {
    const [items, setItems] = useState();
    useEffect(() => {
        const resItems = data.map(({ _id, author, content, date, comments, isLiked, likesCount }) => (
            <HowToQABox
                _id={_id}
                key={_id}
                authorNickname={author.nickname}
                date={date}
                dateToText={timeForToday(date)}
                isQuestion={"A"}
                content={content}
                comments={comments}
                question_id={id}
                adoptedAnswerId={adoptedAnswerId}
                isLiked={isLiked}
                likesCount={likesCount}
            />
        ));
        setItems(resItems);
    }, [1]);
    return <React.Fragment>{items}</React.Fragment>;
};

export default AnswersModuleTemplate;
