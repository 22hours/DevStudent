import React, { useState, useEffect } from "react";
import { Input, Button } from "reactstrap";
import "./NewQuestionMainComponent.css";

// module
import TagInputModule from "module/TagInputModule/TagInputModule";
import MarkdownEditorModule from "module/MarkdownEditorModule/MarkdownEditorModule";

const NewQuestionMainComponent = ({ nickname, title, setTitle, body, setBody, tags, setTags, handleSubmit }) => {
    const [titleCount, setTitleCount] = useState(0);
    const [bodyCount, setBodyCount] = useState(0);
    const [tagsCount, setTagsCount] = useState(0);

    useEffect(() => {
        setTitleCount(title.length);
    }, [title]);

    useEffect(() => {
        setBodyCount(body.length);
    }, [body]);

    useEffect(() => {
        if (tags.length > 5) {
            var newTags = new Array();
            for (var i = 1; i < tags.length; i++) {
                newTags.push(tags[i]);
            }
            setTags(newTags);
        }
        setTagsCount(tags.length);
    }, [tags]);
    return (
        <div className="new-question-main-wrapper">
            <div className="new-question-main-element-box">
                <div className="new-question-title-header-span-warpper">
                    <span className="new-question-title-header-span">Title</span>
                    <br />
                    <span className="new-question-notice-span">궁금한점을 자세하고 구체적으로 적어주세요</span>
                </div>
                <Input
                    value={title}
                    maxLength="35"
                    onChange={({ target: { value } }) => {
                        setTitle(value);
                    }}
                    className="question-title"
                    placeholder="Title : Ex > 자바스크립트로 버튼클릭 이벤트를 핸들링하는것에 대해.."
                />
                <span id="textLimit">{titleCount}/35 [ 10자 이상 ]</span>
            </div>
            <div className="new-question-main-element-box not-overflow">
                <div className="new-question-title-header-span-warpper">
                    <span className="new-question-content-header-span">Tags</span> <br />
                    <span className="new-question-notice-span">태그를 달아주세요!</span>
                </div>
                <TagInputModule tags={tags} setTags={setTags} limit={20} />
                <span id="textLimit">{tagsCount} / 5 개 [ 1개 이상 ]</span>
            </div>
            <div className="new-question-main-element-box">
                <div className="new-question-content-header-span-warpper">
                    <span className="new-question-content-header-span">Body</span> <br />
                    <span className="new-question-notice-span">궁금한점을 자세하고 구체적으로 적어주세요</span>
                </div>
                <MarkdownEditorModule comment={body} setComment={setBody} limit={500} />
                <span id="textLimit">{bodyCount}/500 [ 20자 이상 ]</span>

                {/* <Input
                    id="question-body-input"
                    value={body}
                    onChange={({ target: { value } }) => setBody(value)}
                    size="large"
                    placeholder="ex> 도대체 이건 어떻게 하는 건가요?"
                    type="textarea"
                ></Input> */}
            </div>

            <div className="new-question-main-element-box">
                {/* <div className="submit-left">
                    <Button variant="contained" color="secondary">
                        Back
                    </Button>
                </div> */}
                <div className="submit-right">
                    <Button
                        onClick={() => {
                            if (titleCount < 10) {
                                alert("제목은 10자 이상으로 적어주세요");
                                return;
                            }
                            if (bodyCount < 20) {
                                alert("본문은 20자 이상으로 적어주세요");
                                return;
                            }
                            if (tagsCount < 1) {
                                alert("태그는 1개 이상은 포함해주세요");
                                return;
                            }
                            handleSubmit(nickname, title, body, tags);
                        }}
                        variant="contained"
                        color="info"
                    >
                        SUBMIT
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NewQuestionMainComponent;
