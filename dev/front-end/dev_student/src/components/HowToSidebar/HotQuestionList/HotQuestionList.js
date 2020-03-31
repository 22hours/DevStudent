import React from'react'
import { Container, Row, Col } from 'reactstrap';
import './HotQuestionList.css'
import HotQuestionItem from '../HotQuestionItem/HotQuestionItem';

const HotQuestionList = ({hot}) => {
    const hotlist = hot.map(
    ({idx,   views, text}) => (
        <HotQuestionItem
            idx = {idx}
            text = {text}
            views={views}
            key={idx}>
        </HotQuestionItem>
        )  
    )
    return(
            <div className="hot-question-list-items">
                 {hotlist}
            </div>
    );
}
export default HotQuestionList;