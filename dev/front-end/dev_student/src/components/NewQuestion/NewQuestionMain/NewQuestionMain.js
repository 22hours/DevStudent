import React from "react";
import { Input } from "reactstrap";
import { Button } from "@material-ui/core";
import TagInput from "../../TagInput/TagInput";
import "./NewQuestionMain.css";
const NewQuestionMain = ({ user, title, setTitle, body, setBody, tags, setTags, handleSubmit }) => {
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
                    onChange={({ target: { value } }) => setTitle(value)}
                    className="question-title"
                    placeholder="Title : Ex > 자바스크립트로 버튼클릭 이벤트를 핸들링하는것에 대해.."
                />
            </div>

            <div className="new-question-main-element-box">
                <div className="new-question-content-header-span-warpper">
                    <span className="new-question-content-header-span">Body</span> <br />
                    <span className="new-question-notice-span">궁금한점을 자세하고 구체적으로 적어주세요</span>
                </div>
                <Input
                    value={body}
                    onChange={({ target: { value } }) => setBody(value)}
                    size="large"
                    type="textarea"
                ></Input>
            </div>
            <div className="new-question-main-element-box">
                <div className="new-question-title-header-span-warpper">
                    <br />
                    <span className="new-question-notice-span">태그를 달아주세요! [현재 사용 불가]</span>
                </div>
                {/* <Input
                 onChange={({target : {value}}) => setTags(value)}
                className="question-title" placeholder="Tags : Ex> Javascript..." /> */}
                <TagInput tags={tags} setTags={setTags} />
            </div>
            <div className="new-question-main-element-box">
                <div className="submit-left">
                    <Button variant="contained" color="secondary">
                        Back
                    </Button>
                </div>
                <div className="submit-right">
                    <Button
                        onClick={() => {
                            handleSubmit(user, title, body, tags);
                        }}
                        variant="contained"
                        color="primary"
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default NewQuestionMain;
