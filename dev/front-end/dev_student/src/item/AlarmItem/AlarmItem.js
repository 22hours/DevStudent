import React from "react";
import { Link } from "react-router-dom";
import "./AlarmItem.css";
const AlarmItem = (props) => {
    const { question_id, respondent, content, date, read } = props;
    const AlarmItemBox = ({ children }) => {
        if (read) {
            return <div className="alarm-item-box-true">{children}</div>;
        } else return <div className="alarm-item-box-false">{children}</div>;
    };
    return (
        <div className={"alarm-item-wrapper"}>
            <AlarmItemBox>
                <span className="alarm-question-id">#{question_id}</span>
                <span className="alarm-link">
                    <Link to={"/howto/question/" + question_id}>
                        {respondent} {content}
                    </Link>
                </span>
                <span className="alarm-date">{date}</span>
                <span className="alarm-controller">
                    <Link to="">X</Link>
                </span>
            </AlarmItemBox>
        </div>
    );
};

export default AlarmItem;
