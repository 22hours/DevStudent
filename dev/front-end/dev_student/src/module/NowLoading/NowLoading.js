import React from "react";
import "./NowLoading.css";
import CircularProgress from "@material-ui/core/CircularProgress";
const NowLoading = () => {
    const style = {
        color: "Black",
    };
    return (
        <div className="NowLoading">
            <CircularProgress style={style} />
            <br />
            <br />
            <span>로딩중입니다</span>
            <br />
            <span>조금만 기다려주세요</span>
        </div>
    );
};

export default NowLoading;
