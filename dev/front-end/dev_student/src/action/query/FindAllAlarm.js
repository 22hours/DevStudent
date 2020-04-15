import React from "react";
import { useQuery } from "react-apollo";
import { FIND_ALL_ALARMS } from "query/queries";

const FindAllAlarm = ({ user }) => {
    const { loading, error, data } = useQuery(FIND_ALL_ALARMS, {
        variables: { nickname: user, pageNum: 1, requiredCount: 10 },
    });
    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error!</p>;
    return data;
};

export default FindAllAlarm;
