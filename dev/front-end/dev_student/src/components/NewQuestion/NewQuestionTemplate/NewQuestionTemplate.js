import React, { useState, useContext } from "react";
import "./NewQuestionTemplate.css";
import { Container } from "reactstrap";
import UserContext from "../../../Context/UserContext";
import NewQuestionMain from "../NewQuestionMain/NewQuestionMain";
import NewQuestionSideBarTemplate from "../NewQuestionSideBar/NewQuestionSideBarTemplate/NewQuestionSideBarTemplate";
const NewQuestionTemplate = ({ handleSubmit }) => {
    const { user } = useContext(UserContext);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    return (
        <div className="new-question-wrapper">
            <Container>
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
                    <div className="new-question-sidebar-col">
                        <NewQuestionSideBarTemplate />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NewQuestionTemplate;
