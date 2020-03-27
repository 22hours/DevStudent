import React from'react'
import { Container, Row, Col } from 'reactstrap';
import './HotQuestionList.css'
import HotQuestionItem from '../HotQuestionItem/HotQuestionItem';

const HotQuestionList = ({hot}) => {
    const hotlist = hot.map(
    ({idx, id,  views, text}) => (
        <HotQuestionItem
            idx = {idx}
            id = {id}
            text = {text}
            views={views}
            key={idx}>
        </HotQuestionItem>
        )  
    )
    return(
        <Container className="hot-question-list-items">
            <Row >
                 {hotlist}
            </Row>
        </Container>
    );
}
export default HotQuestionList;