import React, { useState } from "react";
import "./RulePageTemplate.css";
import { Container, Collapse } from "reactstrap";

// icons.
import GavelIcon from "@material-ui/icons/Gavel";

// imgs
import { bean, short, tall, grande, venti, trenta, debal } from "img/rate/ImageIndex";

//atons
import Avatar from "atom/Avatar/Avatar";

//icons
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const RuleItem = ({ children, header, created_at }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const ToggleButton = () => {
        if (isOpen) return <KeyboardArrowDownIcon />;
        else return <KeyboardArrowRightIcon />;
    };
    return (
        <div className="RuleItem">
            <div className="preview-wrapper">
                <span id="rule-icon">
                    <NotificationImportantIcon style={{ paddingBottom: "5px", fontSize: "25px" }} />{" "}
                </span>
                &nbsp;&nbsp;
                <span id="rule-header">{header}</span>
                &nbsp;&nbsp;
                <span id="created_at">2020-04-26</span>
                <span id="toggle-button" onClick={toggle}>
                    <ToggleButton />
                </span>
            </div>
            <Collapse isOpen={isOpen}>{children}</Collapse>
        </div>
    );
};

const RulePageTemplate = () => {
    return (
        <div className="RulePageTemplate">
            <Container>
                <div className="header-row">
                    <span className="content-header">
                        DEVSTU 이용 규칙 <GavelIcon />
                    </span>
                </div>
                <div className="description-row">
                    <span id="page-description">등급제도 / 사이트 이용 규칙</span>
                </div>
                <RuleItem header={"등급이란?"}>
                    <div className="rule-section-row">
                        <div className="rule-item-row">
                            등급이란 사이트 내 회원들의 활동을 장려하기 위한 시스템입니다
                        </div>
                        <div className="rule-item-row">
                            <div className="grade-img-col">
                                <div className="image-row">
                                    <img src={bean}></img>
                                </div>
                                <div className="image-row">
                                    <img src={short}></img>
                                </div>
                                <div className="image-row">
                                    <img src={tall}></img>
                                </div>
                                <div className="image-row">
                                    <img src={grande}></img>
                                </div>
                                <div className="image-row">
                                    <img src={venti}></img>
                                </div>
                                <div className="image-row">
                                    <img src={trenta}></img>
                                </div>
                                <div className="image-row">
                                    <img src={debal}></img>
                                </div>
                            </div>
                            <div className="grade-description-col">
                                <div className="ds-row">
                                    <span id="grade-name">BEAN </span>
                                    <span id="grade-ds"> &nbsp;&nbsp;초기등급</span>
                                    <span id="grade-point"> &nbsp;&nbsp;0 ~ 10</span>
                                </div>
                                <div className="ds-row">
                                    <span id="grade-name">SHORT </span>
                                    <span id="grade-ds"> &nbsp;&nbsp;이제 막 활동을 시작한 등급</span>
                                    <span id="grade-point"> &nbsp;&nbsp;11 ~ 30</span>
                                </div>
                                <div className="ds-row">
                                    <span id="grade-name">TALL</span>
                                    <span id="grade-ds"> &nbsp;&nbsp;어느정도 활동을 한 등급</span>
                                    <span id="grade-point"> &nbsp;&nbsp;31 ~ 70</span>
                                </div>
                                <div className="ds-row">
                                    <span id="grade-name">GRANDE</span>
                                    <span id="grade-ds"> &nbsp;&nbsp;DEVSTU에 익숙해진 등급</span>
                                    <span id="grade-point"> &nbsp;&nbsp;71 ~ 150</span>
                                </div>
                                <div className="ds-row">
                                    <span id="grade-name">VENTI</span>
                                    <span id="grade-ds"> &nbsp;&nbsp;트렌타로 가기 바로 전</span>
                                    <span id="grade-point"> &nbsp;&nbsp;151 ~ 310</span>
                                </div>
                                <div className="ds-row">
                                    <span id="grade-name">TRENTA</span>
                                    <span id="grade-ds"> &nbsp;&nbsp;DEVSTU의 대 지주</span>
                                    <span id="grade-point"> &nbsp;&nbsp;311 ~ </span>
                                </div>
                                <div className="ds-row">
                                    <span id="grade-name">DEVS</span>
                                    <span id="grade-ds"> &nbsp;&nbsp;개발자 등급</span>
                                    <span id="grade-point"> &nbsp;&nbsp; 개발자들 </span>
                                </div>
                            </div>
                        </div>
                        <div className="rule-item-row">등급은 다음과 같은 7종류로 나눠집니다</div>
                        <div className="rule-item-row">
                            등급은 사이트 이용에 큰 영향을 주지는 않습니다만, 클린한 HOWTO 게시판을 위해, 반대 투표와
                            같은 기능에 한하여
                        </div>
                        <div className="rule-item-row">등급별로 사이트 내에서 할 수 있는 행동에 제약이 있습니다</div>
                        <div className="rule-section-footer">&nbsp;</div>
                    </div>
                </RuleItem>
                <RuleItem header={"등급은 어떻게 올리나요?"}>
                    <div className="rule-section-row">
                        <div className="rule-item-row">사이트 내에서는 회원들의 활발한 활동을 장려하기 위해</div>
                        <div className="rule-item-row">회원들의 여러가지 활동에 포인트를 부여합니다</div>
                        <div className="rule-item-row"></div>
                        <div className="rule-item-row">
                            <table border="1">
                                <tr>
                                    <th> 여러 활동들 </th> <th> 포인트 </th>
                                </tr>
                                <tr>
                                    <td> 질문 등록하기 </td> <td> +2 point </td>
                                </tr>
                                <tr>
                                    <td> 답변 달기 </td> <td> +5 point </td>
                                </tr>
                                <tr>
                                    <td> 좋은 답변을 채택하기 </td> <td> +2 point </td>
                                </tr>
                                <tr>
                                    <td> 내가 쓴 답변이 채택되었을 경우 </td> <td> +5 point </td>
                                </tr>
                                <tr>
                                    <td> 좋은 글에 좋아요 누르기 </td> <td> +1 point </td>
                                </tr>
                                <tr>
                                    <td> 나의 글에 좋아요가 달렸을 경우 </td> <td> +2 point </td>
                                </tr>
                                <tr>
                                    <td> 나쁜 글에 싫어요 누르기 </td> <td> -1 point </td>
                                </tr>
                                <tr>
                                    <td> 나의 글에 싫어요가 달렸을 경우 </td> <td> -2 point </td>
                                </tr>
                            </table>
                        </div>
                        <div className="rule-item-row"></div>
                        <div className="rule-item-row">
                            다른사람의 글에 싫어요를 누를 때에는 포인트가 차감되므로 신중하게 판단해주시기 바랍니다.
                        </div>
                        <div className="rule-section-footer">&nbsp;</div>
                    </div>
                </RuleItem>
            </Container>
        </div>
    );
};
export default RulePageTemplate;
