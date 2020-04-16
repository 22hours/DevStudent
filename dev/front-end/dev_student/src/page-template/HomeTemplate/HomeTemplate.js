import React from "react";
import "./HomeTamplate.css";
import { Link } from "react-router-dom";

//modules
import HowToRuleModule from "module/HowToRuleModule/HowToRuleModule";
import RecruitScheduleModule from "module/RecruitScheduleModule/RecruitScheduleModule";

//img
import catholic_wide from "img/home/catholic_wide.png";

// atoms
import FlipText from "atom/FlipText/FlipText";
import { Container, Button } from "reactstrap";

const HomeTamplate = () => {
    return (
        <div className="HomeTemplate">
            <div className="home-intro-wrapper">
                <Container>
                    <div className="home-intro-main-row">주변에 질문할 곳이 너무 없다구요?</div>
                    <div className="home-intro-main-row">영어문서는 너무 보기 힘들죠?</div>
                    <div className="home-intro-header-row">개발하는 대학생 : 대발자</div>
                    <div className="home-intro-button-row">
                        <Link to="/howto">
                            <Button color="info">지식을 찾아서</Button>
                            {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <Button color="info">질문하러가기</Button> */}
                        </Link>
                    </div>
                </Container>
            </div>
            <HowToRuleModule />
            <RecruitScheduleModule />
        </div>
    );
};

export default HomeTamplate;
