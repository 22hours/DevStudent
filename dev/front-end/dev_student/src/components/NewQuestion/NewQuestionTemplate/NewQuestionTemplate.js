import React from 'react'
import './NewQuestionTemplate.css';
import { Container, Row , Input } from 'reactstrap';
import {  Button } from '@material-ui/core';
const NewQuestionTemplate = () => {
    return (
        <div className="new-question-wrapper">
            <Container>
                <Row className="new-question-header-row">
                    <span>무엇이든 물어보세요!</span>
                </Row>
                <Row className="new-question-content-row">

                    <div className="new-question-title-area">
                        <div className="new-question-title-header-span-warpper">
                            <span className="new-question-title-header-span">Title</span>
                            <br />
                            <span className="new-question-notice-span">궁금한점을 자세하고 구체적으로 적어주세요</span>
                        </div>
                        <Input className="question-title" placeholder="default" />

                    </div>

                    <div className="new-question-content-area">
                        <div className="new-question-content-header-span-warpper">
                            <span className="new-question-content-header-span">Body</span>     <br />
                            <span className="new-question-notice-span">궁금한점을 자세하고 구체적으로 적어주세요</span>
                        </div>
                        <Input
                            size="large"
                            type="textarea"></Input>
                    </div>

                    <div className="new-question-submit-area">
                        <div className="submit-left">
                            <Button variant="contained" color="secondary">
                                Back
                             </Button>
                        </div>
                        <div className="submit-right">
                            <Button variant="contained" color="primary">
                                Submit
                            </Button>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default NewQuestionTemplate