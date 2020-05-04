import React from "react";
import "./IssuePageTemplate.css";
import { Container } from "reactstrap";
import BugReportIcon from "@material-ui/icons/BugReport";

// items
import IssueItem from "item/IssueItem/IssueItem";

const IssuePageTemplate = ({ issue }) => {
    console.log(issue);
    const issueList = issue?.map(({ html_url, title, created_at, state, labels, user }) => (
        <IssueItem key={html_url} title={title} state={state} user={user} html_url={html_url} created_at={created_at} />
    ));

    return (
        <div className="IssuePageTemplate">
            <Container>
                <div className="issue-header-row">
                    <span className="content-header">
                        ISSUES <BugReportIcon />
                    </span>
                </div>
                <div>{issueList}</div>
            </Container>
        </div>
    );
};

export default IssuePageTemplate;
