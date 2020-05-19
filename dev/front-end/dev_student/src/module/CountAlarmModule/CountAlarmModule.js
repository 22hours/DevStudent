import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//loading
import CircularProgress from "@material-ui/core/CircularProgress";
//Queries
import { POST, COUNT_UNREAD_ALARMS } from "rest";

const CountAlarmModule = (props) => {
    const { user } = props;
    const [countAlaram, setCountAlarm] = useState();
    const getCountAlaram = async () => {
        const data = await POST("post", COUNT_UNREAD_ALARMS, {
            nickname: user,
        });
        setCountAlarm(data);
    };
    useEffect(() => {
        getCountAlaram();
    }, [1]);

    return <span style={{ fontSize: "15px", color: "#6c757d" }}> {countAlaram?.count}</span>;
};
export default CountAlarmModule;
