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

    return (
        <Link to="/alarm">
            <div>알림 {data.countUnreadAlarms.count}</div>
        </Link>
    );
};
export default CountAlarmModule;
