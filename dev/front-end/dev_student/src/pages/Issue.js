import React, { useEffect, useState } from "react";
import axios from "axios";
import IssuePageTemplate from "page-template/IssuePageTemplate/IssuePageTemplate";
const Issue = () => {
    const [issue, setIssue] = useState();
    useEffect(() => {
        axios.get("https://api.github.com/repos/22hours/devstudent/issues").then((response) => {
            console.log(response.data);
            setIssue(response.data);
        });
    }, [1]);
    return <IssuePageTemplate issue={issue} />;
};

export default Issue;
