import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "reactstrap";
const RecruitScheduleModule = () => {
    const [item, setItem] = useState();
    useEffect(() => {
        axios
            .get("https://raw.githubusercontent.com/jojoldu/junior-recruit-scheduler/master/db.json")
            .then((response) => {
                console.log(response.data.recruits);
                setItem(
                    response.data.recruits.map(({ endDate, link, description }) => (
                        <div key={link}>
                            <p>{description}</p>
                            <p>{endDate}</p>
                        </div>
                    ))
                );
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [1]);
    const Recurit = async () => {};
    return (
        <React.Fragment>
            <Container>{item}</Container>
        </React.Fragment>
    );
};

export default RecruitScheduleModule;
