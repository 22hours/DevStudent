import React from "react";
import { Container } from "reactstrap";
import "./MypageTemplate.css";

//imgs
import avatar_test from "img/mypage/avatar_test.png";
import avatar_test2 from "img/mypage/avatar_test2.png";

const MypageTemplate = () => {
    return (
        <React.Fragment>
            <div className="MypageTemplate">
                <Container>
                    <div className="mypage-user-header-row">
                        <div className="avatar-col">
                            <img src={avatar_test}></img>
                        </div>
                        <div className="info-col">
                            <div className="badge-row">badges</div>
                            <div className="nickname-row">badges</div>
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
};
export default MypageTemplate;
