import React, { useState, useEffect } from "react";
//Queries
import { POST, COUNT_UNREAD_ALARMS } from "rest";
//icons
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import CircularProgress from "@material-ui/core/CircularProgress";

const AlarmBadgeItem = () => {
    const localData = JSON.parse(localStorage.getItem("user"));
    const user = localData.nickname;
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

    var count = countAlaram?.count;

    if (count === "0") {
        count = 0;
    }
    return (
        <Badge badgeContent={count} color="primary">
            <MailIcon style={{ fontize: "5px" }} />
        </Badge>
    );
};
export default AlarmBadgeItem;
