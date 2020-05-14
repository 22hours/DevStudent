import React from "react";
import { useQuery } from "react-apollo";
import { COUNT_UNREAD_ALARMS } from "query/queries";

//icons
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import CircularProgress from "@material-ui/core/CircularProgress";

const AlarmBadgeItem = () => {
    const localData = JSON.parse(localStorage.getItem("user"));
    const user = localData.nickname;
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
    var count = data.countUnreadAlarms.count;
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
