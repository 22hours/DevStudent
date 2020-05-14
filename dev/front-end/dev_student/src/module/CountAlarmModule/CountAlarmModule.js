import React from "react";
import { useQuery } from "react-apollo";
import { COUNT_UNREAD_ALARMS } from "query/queries";
import { Link } from "react-router-dom";

//loading
import CircularProgress from "@material-ui/core/CircularProgress";

const CountAlarmModule = (props) => {
    const { user } = props;
    const { loading, error, data } = useQuery(COUNT_UNREAD_ALARMS, {
        variables: { nickname: user },
    });
    if (loading)
        return (
            <div>
                <CircularProgress size={15} />
            </div>
        );
    if (error) return <div>Error!</div>;

    return <span style={{ fontSize: "15px", color: "#6c757d" }}> {data.countUnreadAlarms.count}</span>;
};
export default CountAlarmModule;
