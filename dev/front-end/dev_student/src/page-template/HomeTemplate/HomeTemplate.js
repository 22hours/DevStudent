import React from "react";
import "./HomeTamplate.css";
import { Link } from "react-router-dom";

//module template
import HowToKanbanModuleTemplate from "module-template/HowToKanbanModuleTemplate/HowToKanbanModuleTemplate";

//modules
import HowToRuleModule from "module/HowToRuleModule/HowToRuleModule";
import RecruitScheduleModule from "module/RecruitScheduleModule/RecruitScheduleModule";

// atoms
import { Container, Button } from "reactstrap";

const HomeTamplate = () => {
    return (
        <div className="HomeTemplate">
            <div className="home-intro-wrapper">
                <div className="black-mask">
                    <Container>
                        <div className="home-intro-main-row">주변에 질문할 곳이 너무 없다구요?</div>
                        <div className="home-intro-main-row">영어문서는 너무 보기 힘들죠?</div>
                        <div className="home-intro-header-row">개발하는 대학생 : 대발자</div>
                        <div className="home-intro-button-row">
                            <Link to="/howto">
                                <Button color="info">지식을 찾아서</Button>
                            </Link>
                        </div>
                    </Container>
                </div>
            </div>
            <HowToKanbanModuleTemplate />
            <HowToRuleModule />
            <RecruitScheduleModule />
        </div>
    );
};

export default HomeTamplate;
