import React, { useEffect, useState } from "react";

// utils
import { timeForToday, getTimeStamp } from "util/time";

// page-template
import NewQuestionPageTemplate from "page-template/NewQuestionPageTemplate/NewQuestionPageTemplate";

// rest
import { POST, CREATE_QUESTION, UPLOAD_REAL_FILE } from "rest";

const NewQuestion = () => {
    useEffect(() => {
        return () => {
            sessionStorage.removeItem("devstu_imgs");
        };
    }, []);

    const sendDataToMainServer = async (authorParam, titleParam, contentParam, tagsParam) => {
        const data = await POST("post", CREATE_QUESTION, {
            author: authorParam,
            title: titleParam,
            content: contentParam,
            tags: tagsParam,
        });
        if (data) {
            alert("질문을 저장했습니다.");
            window.location.href = "/howto";
        } else {
            alert("저장실패");
        }
    };
    const handleSubmit = async (authorParam, titleParam, contentParam, tagsParam) => {
        if (JSON.parse(sessionStorage.getItem("devstu_imgs"))) {
            const data = await POST(
                "post",
                UPLOAD_REAL_FILE(getTimeStamp()),
                JSON.parse(sessionStorage.getItem("devstu_imgs"))
            );
        }
        sendDataToMainServer(authorParam, titleParam, contentParam, tagsParam);
    };

    return (
        <React.Fragment>
            <NewQuestionPageTemplate handleSubmit={handleSubmit}></NewQuestionPageTemplate>
        </React.Fragment>
    );
};

export default NewQuestion;
