import React from "react";
import "./NewQuestionRuleModule.css";

const NewQuestionRuleModule = () => {
    return (
        <div className="newquestion_sidebar_wrapper">
            <div className="newquestion_sidebar_header">게시판 규칙</div>
            <div className="newquestion_sidebar_main">
                {" "}
                본 게시판은 <b>대학생 개발자들</b>이 갖고있는 <br />
                <b>'개발에 대한 질문'</b>을 해결하는 목적으로 사용됩니다.
                <br />이 외의 목적으로 사용할 시 <b>경고 또는 강퇴조치</b> 하겠습니다.
            </div>
        </div>
    );
};
export default NewQuestionRuleModule;
