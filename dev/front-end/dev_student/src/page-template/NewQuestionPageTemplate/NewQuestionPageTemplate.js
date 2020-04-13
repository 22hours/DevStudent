import React, { useState, useContext } from "react";
import "./NewQuestionPageTemplate.css";
import { Container } from "reactstrap";

// context
import UserContext from "context/UserContext";

// components
import NewQuestionMainComponent from "component/NewQuestionMainComponent/NewQuestionMainComponent";
import NewQuestionSideBarComponent from "component/NewQuestionSideBarComponent/NewQuestionSideBarComponent";

const NewQuestionPageTemplate = ({ handleSubmit }) => {
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
                        <NewQuestionMainComponent
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
                        <NewQuestionSideBarComponent />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NewQuestionPageTemplate;
