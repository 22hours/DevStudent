import React from "react";
import { useMutation } from "@apollo/react-hooks";

// muatations
import { CREATE_QUESTION } from "mutation/mutations";

// page-template
import NewQuestionPageTemplate from "page-template/NewQuestionPageTemplate/NewQuestionPageTemplate";
const NewQuestion = () => {
    const [createQuestion] = useMutation(CREATE_QUESTION);
    const handleSubmit = async (authorParam, titleParam, contentParam, tagsParam) => {
        console.log(contentParam);
        var content = contentParam.replace(/\n/g, "<br />");
        createQuestion({
            variables: {
                author: authorParam,
                title: titleParam,
                content: content,
                tags: tagsParam,
            },
        })
            .then((response) => {
                alert("질문을 저장했습니다.");
                window.location.href = "http://localhost:3000/howto";
            })
            .catch((err) => {
                alert(err.messeage);
            });
    };

    return (
        <React.Fragment>
            <NewQuestionPageTemplate handleSubmit={handleSubmit}></NewQuestionPageTemplate>
        </React.Fragment>
    );
};

export default NewQuestion;
