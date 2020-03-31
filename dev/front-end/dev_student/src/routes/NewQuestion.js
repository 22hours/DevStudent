import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import NewQuestionTemplate from '../components/NewQuestion/NewQuestionTemplate/NewQuestionTemplate';
import {CREATE_QUESTION} from '../Mutation/mutations';

const NewQuestion = ({}) => {
    
    const [createQuestion] = useMutation(CREATE_QUESTION);
    const handleSubmit = async(authorParam,titleParam,contentParam,tagsParam) =>{
        createQuestion({variables : {
            author : authorParam,
            title : titleParam,
            content : contentParam,
            tags:tagsParam
        }})
        .then(response => {
            alert("질문을 저장했습니다.");
            window.location.href = 'http://localhost:3000/howto';
        })
        .catch(err => {
            alert(err.messeage)
        })
    };

    return(
        <React.Fragment>
        <NewQuestionTemplate  handleSubmit={handleSubmit}>
        </NewQuestionTemplate>
        </React.Fragment>
    );
}

export default NewQuestion;