import React from "react";
import "./HowToRuleContentItem.css";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
// imgs
import newquestion from "img/howto-rule/newquestion.png";
import vote from "img/howto-rule/vote.png";
import answer from "img/howto-rule/answer.png";
import winwin from "img/howto-rule/winwin.png";
import solved from "img/howto-rule/solved.png";
import tags from "img/howto-rule/tags.png";

const HowToRuleContentItem = ({ nowClicked }) => {
    const ContentRender = ({ children }) => {
        switch (nowClicked) {
            case 1:
                return (
                    <React.Fragment>
                        <div className="content-img-div">
                            <img src={newquestion}></img>
                        </div>
                        {/* <div className="content-descript-div">
                            자세하게 적혀진 여러분의 질문을 모두 함께 고민할거에요! <br />
                            질문은 HowTo게시판에서 NewQuestion 버튼을 눌러 이용해주세요 <br />
                            <br />
                            <Link to="/newquestion">
                                <Button color="info">질문하러 갈까요?</Button>
                            </Link>
                        </div> */}
                    </React.Fragment>
                );

            case 2:
                return (
                    <React.Fragment>
                        <div className="content-img-div">
                            <img src={answer}></img>
                        </div>
                        {/* <div className="content-descript-div">
                            누군가의 질문에 답변하세요
                            <br />
                            우리의 지식을 공유해요
                            <br />
                            <br />
                            <Link to="/howto">
                                <Button color="info">답변하러 갈까요?</Button>
                            </Link>
                        </div> */}
                    </React.Fragment>
                );

            case 3:
                return (
                    <React.Fragment>
                        <div className="content-img-div">
                            <img src={vote}></img>
                        </div>
                        {/* <div className="content-descript-div">
                            여러분이 얼마나 멋진 질문 혹은 답변을 했는지
                            <br />
                            또는 누군가가 얼마나 멋진 이야기를 했는지 투표하세요!
                            <br />
                            <br />
                            <Link to="/howto">
                                <Button color="info">오늘은 무슨 이야기들이 올라왔을까요?</Button>
                            </Link>
                        </div> */}
                    </React.Fragment>
                );
            case 4:
                return (
                    <React.Fragment>
                        <div className="content-img-div">
                            <img src={winwin}></img>
                        </div>
                        <div className="content-descript-div">
                            우리 모두의 힘을 합치면 <br />
                            우리도 멋진 일을 해낼 수 있을거에요 <br />
                            <br />
                            <Link to="/newquestion">
                                <Button color="info">지식을 찾아서</Button>
                            </Link>
                        </div>
                    </React.Fragment>
                );
            case 5:
                return (
                    <React.Fragment>
                        <div className="content-img-div">
                            <img src={solved}></img>
                        </div>
                        <div className="content-descript-div">
                            누군가 멋진 대안을 제시하면 <br />
                            고맙다는 인사로 Solved 도장을 찍어요 <br />
                            <br />
                            <Link to="/newquestion">
                                <Button color="info">지식을 찾아서</Button>
                            </Link>
                        </div>
                    </React.Fragment>
                );
            case 6:
                return (
                    <React.Fragment>
                        <div className="content-img-div">
                            <img src={tags}></img>
                        </div>
                        <div className="content-descript-div">
                            질문에 해시태그를 달아주세요 <br />
                            더 빠르고 쉽게 답변을 받을 수 있을거에요 <br />
                            <br />
                            <Link to="/newquestion">
                                <Button color="info">지식을 찾아서</Button>
                            </Link>
                        </div>
                    </React.Fragment>
                );

            default:
                return <React.Fragment>newQuestion</React.Fragment>;
        }
    };
    return (
        <React.Fragment>
            <div className="HowToRuleContentItem">
                <ContentRender />
            </div>
        </React.Fragment>
    );
};
export default HowToRuleContentItem;
