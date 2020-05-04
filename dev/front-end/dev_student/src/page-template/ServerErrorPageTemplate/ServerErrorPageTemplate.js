import React from "react";
import errordebal from "img/server_error/error_debal.png";
import "./ServerErrorPageTemplate.css";

const ServerErrorPageTemplate = () => {
    return (
        <div className="ServerError">
            <div className="image-row">
                <div className="image-col">
                    <img src={errordebal}></img>
                </div>
            </div>
            <div id="server-error">Internal Server Error</div>
            <div id="server-error-notice">서버 에러가 발생했습니다.</div>
            <div id="server-error-notice">페이지를 재접속 해주세요.</div>
        </div>
    );
};
export default ServerErrorPageTemplate;
