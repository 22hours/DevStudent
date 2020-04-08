import React, { useState, useContext } from "react";
import "./NewQuestionTemplate.css";
import { Container, Row, Col, Input } from "reactstrap";
import { Button } from "@material-ui/core";
import UserContext from "../../../Context/UserContext";
import TagInput from "../../TagInput/TagInput";
import NewQuestionMain from "../NewQuestionMain/NewQuestionMain";
const NewQuestionTemplate = ({ handleSubmit }) => {
    const { user } = useContext(UserContext);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);

    return (
        <div className="new-question-wrapper">
            <div className="new-question-header-row">
                <span>{user}님 &nbsp;</span>
                <span>무엇이든 물어보세요!</span>
            </div>
            <div className="new-question-body-warpper">
                <div className="new-question-main-col">
                    <NewQuestionMain
                        user={user}
                        title={title}
                        setTitle={setTitle}
                        body={body}
                        setBody={setBody}
                        tags={tags}
                        setTags={setTags}
                        handleSubmit={handleSubmit}
                    />
                </div>
                <div className="new-question-sidebar-col">d</div>
            </div>
        </div>
    );
};

export default NewQuestionTemplate;
