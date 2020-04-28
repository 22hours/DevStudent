import React, { useContext } from "react";
import AlarmTemplate from "page-template/AlarmTemplate/AlarmTemplate";
import { FIND_ALL_ALARMS } from "../query/queries";
import UserContext from "context/UserContext";
import { useQuery } from "react-apollo";
const Alarm = () => {
    const nickname = JSON.parse(localStorage.getItem("user"))?.nickname;
    const { loading, error, data } = useQuery(FIND_ALL_ALARMS, {
        variables: { nickname: nickname, pageNum: 1, requiredCount: 10 },
    });
    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error!</p>;
    return <AlarmTemplate alarms={data.findAllAlarms} />;
};

export default Alarm;
