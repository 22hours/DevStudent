import React, { useState, useEffect } from "react";
import AlarmTemplate from "page-template/AlarmTemplate/AlarmTemplate";
import ServerError from "pages/ServerError";
import CircularProgress from "@material-ui/core/CircularProgress";

// modules
import NowLoading from "module/NowLoading/NowLoading";

// rest
import { POST, FIND_ALL_ALARMS } from "rest";

const Alarm = () => {
    const nickname = JSON.parse(localStorage.getItem("user"))?.nickname;
    const [alarmData, setAlarmData] = useState();
    const getAlarmData = async () => {
        const data = await POST("post", FIND_ALL_ALARMS, {
            nickname: nickname,
            pageNum: 1,
            requiredCount: 10,
        });
        if (data) {
            setAlarmData(data);
        }
    };
    useEffect(() => {
        getAlarmData();
    }, [1]);

    if (alarmData) {
        return <AlarmTemplate alarms={alarmData} />;
    } else {
        return <NowLoading />;
    }
};

export default Alarm;
