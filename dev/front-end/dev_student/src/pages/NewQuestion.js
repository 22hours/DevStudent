import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import axios from "axios";

// muatations
import { CREATE_QUESTION } from "mutation/mutations";

// utils
import { timeForToday, getTimeStamp } from "util/time";

// page-template
import NewQuestionPageTemplate from "page-template/NewQuestionPageTemplate/NewQuestionPageTemplate";
const NewQuestion = () => {
    const url = "https://devstu.koreaelection.shop/uploadRealFile/" + getTimeStamp() + "";
    const [createQuestion] = useMutation(CREATE_QUESTION);

    useEffect(() => {
        return () => {
            console.log("cleaned up");
            sessionStorage.removeItem("devstu_imgs");
        };
    }, []);

    const sendDataToMainServer = (authorParam, titleParam, contentParam, tagsParam) => {
        createQuestion({
            variables: {
                author: authorParam,
                title: titleParam,
                content: contentParam,
                tags: tagsParam,
            },
        })
            .then((response) => {
                alert("질문을 저장했습니다.");
                window.location.href = "/howto";
            })
            .catch((err) => {
                alert(err.messeage);
            });
    };
    const handleSubmit = async (authorParam, titleParam, contentParam, tagsParam) => {
        console.log(contentParam);
        if (JSON.parse(sessionStorage.getItem("devstu_imgs"))) {
            axios
                .post(url, JSON.parse(sessionStorage.getItem("devstu_imgs")))
                .then((response) => {})
                .catch((error) => {});
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
