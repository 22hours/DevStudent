import React from "react";
import notfound from "img/notfound/notfound.png";
import notfound2 from "img/notfound/notfound2.png";

import "./NotFoundPageTemplate.css";
const NotFoundPageTemplate = () => {
    return (
        <div className="NotFound">
            <div className="image-row">
                <div className="image-col">
                    <img src={notfound2}></img>
                </div>
            </div>
            <div id="notfound">NOT FOUND</div>
            <div id="notfound-notice">없는 페이지에 접근 하셨어요</div>
            <div
                id="notfound-exit"
                onClick={() => {
                    window.location.href = "/";
                }}
            >
                여기서 나가게 해줘!
            </div>
        </div>
    );
};
export default NotFoundPageTemplate;
