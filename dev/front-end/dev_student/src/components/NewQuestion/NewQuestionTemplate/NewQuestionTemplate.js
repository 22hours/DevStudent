import React,{useState, useContext} from 'react'
import './NewQuestionTemplate.css';
import { Container, Row , Input } from 'reactstrap';
import {  Button } from '@material-ui/core';
import UserContext from '../../../Context/UserContext';
const NewQuestionTemplate = ({handleSubmit}) => {
    const {user} = useContext(UserContext);
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [tags,setTags]=useState('');
    const testTag = ["javascript","c++"];
    return (
        <div className="new-question-wrapper">
            <Container>
                <Row className="new-question-header-row">
                   <span>{user}님 &nbsp;</span>
                    
                    <span>무엇이든 물어보세요!</span>
                </Row>
                <Row className="new-question-content-row">

                    <div className="new-question-title-area">
                        <div className="new-question-title-header-span-warpper">
                            <span className="new-question-title-header-span">Title</span>
                            <br />
                            <span className="new-question-notice-span">궁금한점을 자세하고 구체적으로 적어주세요</span>
                        </div>
                        <Input
                         value={title} 
                        onChange={({target : {value}}) => setTitle(value)}
                         className="question-title" placeholder="Title : Ex > 자바스크립트로 버튼클릭 이벤트를 핸들링하는것에 대해.." />

                    </div>

                    <div className="new-question-content-area">
                        <div className="new-question-content-header-span-warpper">
                            <span className="new-question-content-header-span">Body</span>     <br />
                            <span className="new-question-notice-span">궁금한점을 자세하고 구체적으로 적어주세요</span>
                        </div>
                        <Input
                            value={body}
                            onChange={({target : {value}}) => setBody(value)}
                            size="large"
                            type="textarea"></Input>
                    </div>
                    <div className="new-question-title-area">
                        <div className="new-question-title-header-span-warpper">
                            <br />
                            <span className="new-question-notice-span">태그를 달아주세요! [현재 사용 불가]</span>
                        </div>
                        <Input
                         onChange={({target : {value}}) => setTags(value)}
                        className="question-title" placeholder="Tags : Ex> Javascript..." />

                    </div>
                    <div className="new-question-submit-area">
                        <div className="submit-left">
                            <Button variant="contained" color="secondary">
                                Back
                             </Button>
                        </div>
                        <div className="submit-right">
                            <Button 
                            onClick={()=>{handleSubmit(user,title,body,testTag)}}
                            variant="contained" color="primary">
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