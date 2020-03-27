import React from 'react'
import QuestionTag from '../QuestionTag/QuestionTag';
import { Container, Row, Col } from 'reactstrap';

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
            <Container>
                {taglist}
            </Container>
        );
}
export default QuestionTagList;