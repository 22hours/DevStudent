import React from 'react';
import './NewQuestionSideBarHowto.css';

const NewQuestionSideBarHowto = () => {
    return(
        <div className="newquestion_sidebar_wrapper">
        <div className="newquestion_sidebar_header">이렇게 질문하세요!</div>
        <div className="newquestion_sidebar_main"> 
        1. 제목은 궁금한 것을 <b>요약해서</b> 적어주세요.<br/>
            <div className="newquestion_sidebar_howto-content"> >제목은 한눈에 알아보기 쉽게 적어주세요.</div>
        2. 자신이 <b>시도했던 방법</b>도 같이 적어주세요.<br/>
            <div className="newquestion_sidebar_howto-content"> >모로롤ㄹ로로<br/>>뭐적지 </div>
        3. <b>MarkDown</b> 을 사용해서 질문 내용을 올려주세요. <br/>
            <div className="newquestion_sidebar_howto-content"> >코드표시 개꿀~~ </div>
        4. 질문의 내용에 맞는 <b>태그</b>를 달아주세요.
            <div className="newquestion_sidebar_howto-content"> >최대 10개?? <br/> >화이팅  </div>
        </div>
    </div>
    );
}  
export default NewQuestionSideBarHowto;