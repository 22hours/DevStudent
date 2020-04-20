import React from "react";
import "./RulePageTemplate.css";
import { Container } from "reactstrap";

// icons.
import GavelIcon from "@material-ui/icons/Gavel";

// imgs
import { bean, short, tall, grande, venti, trenta, debal } from "img/rate/ImageIndex";

//atons
import Avatar from "atom/Avatar/Avatar";

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
                <div className="rule-section-row">
                    <div className="rule-header-row">등급이란?</div>
                    <div className="rule-item-row">등급이란 사이트 내 회원들의 활동을 장려하기 위한 시스템입니다</div>
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
                                <span id="grade-point"> &nbsp;&nbsp;0 ~ 30</span>
                            </div>
                            <div className="ds-row">
                                <span id="grade-name">SHORT </span>
                                <span id="grade-ds"> &nbsp;&nbsp;이제 막 활동을 시작한 등급</span>
                                <span id="grade-point"> &nbsp;&nbsp;31 ~ 200</span>
                            </div>
                            <div className="ds-row">
                                <span id="grade-name">TALL</span>
                                <span id="grade-ds"> &nbsp;&nbsp;어느정도 활동을 한 등급</span>
                                <span id="grade-point"> &nbsp;&nbsp;201 ~ 500</span>
                            </div>
                            <div className="ds-row">
                                <span id="grade-name">GRANDE</span>
                                <span id="grade-ds"> &nbsp;&nbsp;DEVSTU에 익숙해진 등급</span>
                                <span id="grade-point"> &nbsp;&nbsp;501 ~ 1000</span>
                            </div>
                            <div className="ds-row">
                                <span id="grade-name">VENTI</span>
                                <span id="grade-ds"> &nbsp;&nbsp;트렌타로 가기 바로 전</span>
                                <span id="grade-point"> &nbsp;&nbsp;1001 ~ 2000</span>
                            </div>
                            <div className="ds-row">
                                <span id="grade-name">TRENTA</span>
                                <span id="grade-ds"> &nbsp;&nbsp;DEVSTU의 대 지주</span>
                                <span id="grade-point"> &nbsp;&nbsp;2001 ~ </span>
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
                        등급은 사이트 이용에 큰 영향을 주지는 않습니다만, 클린한 HOWTO 게시판을 위해, 반대 투표와 같은
                        기능에 한하여
                    </div>
                    <div className="rule-item-row"></div>
                    <div className="rule-item-row">등급별로 사이트 내에서 할 수 있는 행동에 제약이 있습니다</div>
                    <div className="rule-section-footer">&nbsp;</div>
                </div>
                {/* 등급은 어떻게 올리나요 */}
                <div className="rule-section-row">
                    <div className="rule-header-row">등급은 어떻게 올리나요?</div>
                    <div className="rule-item-row">사이트 내에서는 회원들의 활발한 활동을 장려하기 위해</div>
                    <div className="rule-item-row">회원들의 여러가지 활동에 포인트를 부여합니다</div>
                    <div className="rule-item-row">여기에 포인트 표를 넣자</div>

                    <div className="rule-section-footer">&nbsp;</div>
                </div>
            </Container>
        </div>
    );
};
export default RulePageTemplate;
