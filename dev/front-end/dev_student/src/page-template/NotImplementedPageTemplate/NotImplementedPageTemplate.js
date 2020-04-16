import React from "react";
import notimplemented from "img/not-implemented/notimplemented.png";

import "./NotImplementedPageTemplate.css";
const NotImplementedPageTemplate = () => {
    return (
        <div className="NotImplemented">
            <div className="image-row">
                <div className="image-col">
                    <img src={notimplemented}></img>
                </div>
            </div>
            <div id="notimp">NOT IMPLEMENTED</div>
            <div id="notimp-notice">열심히 만들고 있어요 ㅠ</div>
            <div
                id="notimp-exit"
                onClick={() => {
                    window.location.href = "/";
                }}
            >
                여기서 나가게 해줘!
            </div>
        </div>
    );
};
export default NotImplementedPageTemplate;
