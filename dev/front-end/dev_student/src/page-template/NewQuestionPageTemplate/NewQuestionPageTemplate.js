import React, { useState } from "react";
import "./NewQuestionPageTemplate.css";
import { Container } from "reactstrap";

// context

// components
import NewQuestionMainComponent from "component/NewQuestionMainComponent/NewQuestionMainComponent";
import NewQuestionSideBarComponent from "component/NewQuestionSideBarComponent/NewQuestionSideBarComponent";

// items
import HowToBoxItem from "item/HowToBoxItem/HowToBoxItem";

const NewQuestionPageTemplate = ({ handleSubmit }) => {
    const localData = JSON.parse(localStorage.getItem("user"));
    const nickname = localData?.nickname;

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);

    return (
        <div className="new-question-wrapper">
            <Container>
                <div className="new-question-header-row">
                    <span>{nickname}님 &nbsp;</span>
                    <span>무엇이든 물어보세요!</span>
                </div>
                <div className="new-question-body-warpper">
                    <div className="new-question-main-col">
                        <div className="new-question-preview-box">
                            <HowToBoxItem
                                authorNickname={nickname}
                                authorGrade="dev"
                                authorPoint="5000"
                                title={title}
                                previews={body.substr(0, 100)}
                                views={0}
                                likesCount={0}
                                answers={0}
                                adoptedAnswerId={null}
                            />
                        </div>
                        <div className="new-question-main-component">
                            <NewQuestionMainComponent
                                nickname={nickname}
                                title={title}
                                setTitle={setTitle}
                                body={body}
                                setBody={setBody}
                                tags={tags}
                                setTags={setTags}
                                handleSubmit={handleSubmit}
                            />
                        </div>
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
