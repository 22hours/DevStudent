import React from 'react'
import QuestionTag from '../QuestionTag/QuestionTag';

const QuestionTagList = ({tag}) => {
    const taglist = tag.map(
        ({idx, tagname,tagcount}) => (
            <QuestionTag
                idx = {idx}
                tagname={tagname}
                tagcount={tagcount}
                key = {tagname}>
            </QuestionTag>
            )  
        )
        return(
            <div>
                {taglist}
            </div>
        );
}
export default QuestionTagList;