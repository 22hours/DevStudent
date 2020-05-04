import React from "react";
import "./IssuePageTemplate.css";
import { Container } from "reactstrap";
import BugReportIcon from "@material-ui/icons/BugReport";

// items
import IssueItem from "item/IssueItem/IssueItem";

//icons
import AddIcon from "@material-ui/icons/Add";

const IssuePageTemplate = ({ issue }) => {
    console.log(issue);
    const issueList = issue?.map(({ html_url, title, created_at, state, labels, user, comments }) => (
        <IssueItem
            key={html_url}
            title={title}
            state={state}
            user={user}
            html_url={html_url}
            created_at={created_at}
            labels={labels}
            comments={comments}
        />
    ));

    return (
        <div className="IssuePageTemplate">
            <Container>
                <div className="issue-header-row">
                    <span className="content-header">
                        ISSUES <BugReportIcon />
                    </span>
                    &nbsp; &nbsp;
                    <span id="descript">
                        <a href="https://github.com/22hours/DevStudent">https://github.com/22hours/DevStudent</a>
                    </span>
                    <div className="make-new-issue">
                        <a href="https://github.com/22hours/DevStudent/issues/new">ADD NEW ISSUE</a>
                    </div>
                </div>
                <div>{issueList}</div>
            </Container>
        </div>
    );
};

export default IssuePageTemplate;
