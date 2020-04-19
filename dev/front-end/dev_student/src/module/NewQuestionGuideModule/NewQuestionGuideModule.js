import React from "react";
import "./NewQuestionGuideModule.css";

const NewQuestionGuideModule = () => {
    return (
        <div className="newquestion_sidebar_wrapper">
            <div className="newquestion_sidebar_header">이렇게 질문하세요!</div>
            <div className="newquestion_sidebar_main">
                1. 질문의 내용을 <b>요약해서</b> 작성해주세요.
                <br />
                <div className="newquestion_sidebar_howto-content">
                    {" "}
                    >무엇을 하려고 했었는지 자세하게 적어주세요.
                    <br />
                    >발생한 에러 메세지도 첨부해주세요.
                </div>
                <div className="newquestion-guide-module"></div>
                2. 자신이 <b>시도했던 방법</b>도 같이 적어주세요.
                <br />
                <div className="newquestion_sidebar_howto-content">
                    {" "}
                    >어떠한 방법으로 시도를 했는지 적어주세요.
                    <br />
                    >참고했던 사이트의 내용도 적으면 좋아요.
                    <br />
                    >그럼 더 나은 해결책을 얻을 수 있어요.
                </div>
                <div className="newquestion-guide-module"></div>
                3. <b>MarkDown</b> 을 사용해서 질문 내용을 올려주세요. <br />
                <div className="newquestion_sidebar_howto-content">
                    >MarkDown 문법을 사용해 자신의 코드를 보여주세요.
                    <br />
                    >코드가 너무 길다면 에러가 났던 코드 부분을 보여줘도 좋아요.{" "}
                </div>
                <div className="newquestion-guide-module"></div>
                4. 질문의 내용에 맞는 <b>태그</b>를 달아주세요.
                <div className="newquestion_sidebar_howto-content">
                    {" "}
                    >많은 사람들이 내가 작성한 질문을 쉽게 찾을 수 있어요. <br />
                    >태그는 최대 5개를 선택할 수 있어요.{" "}
                </div>
            </div>
        </div>
    );
};
export default NewQuestionGuideModule;
