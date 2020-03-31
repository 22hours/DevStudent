import React from 'react';
import {Container} from 'reactstrap';
import HowToListHeaderTemplate from '../HowToListHeaderTemplate/HowToListHeaderTemplate';
const HowToListTemplate = ({questionCount,questionList,question_count,tags,param,setParam}) => {
    return (
        <React.Fragment>
        <Container className='margin-top-3 red-border'>
           <HowToListHeaderTemplate 
            setParam={setParam}           
            param={param} 
            tags={tags} question_count={questionCount}></HowToListHeaderTemplate>
        </Container>
        <div>
           {questionList}
        </div>
        <Container className='margin-top-3 red-border'>
        </Container>
        </React.Fragment>
    );
}
export default HowToListTemplate;