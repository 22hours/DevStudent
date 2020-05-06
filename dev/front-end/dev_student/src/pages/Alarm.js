import React from "react";
import AlarmTemplate from "page-template/AlarmTemplate/AlarmTemplate";
import { FIND_ALL_ALARMS } from "../query/queries";
import { useQuery } from "react-apollo";
import ServerError from "pages/ServerError";
import CircularProgress from "@material-ui/core/CircularProgress";

const Alarm = () => {
    const nickname = JSON.parse(localStorage.getItem("user"))?.nickname;
    const { loading, error, data } = useQuery(FIND_ALL_ALARMS, {
        variables: { nickname: nickname, pageNum: 1, requiredCount: 10 },
    });
    if (loading)
        return (
            <div>
                <CircularProgress />
            </div>
        );
    if (error) return <ServerError />;
    return <AlarmTemplate alarms={data.findAllAlarms} />;
};

export default Alarm;
