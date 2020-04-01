import React from'react'
import { Container, Row, Col } from 'reactstrap';
import './HotQuestionList.css'
import HotQuestionItem from '../HotQuestionItem/HotQuestionItem';

const HotQuestionList = ({hotquestionList}) => {
   
    return(
            <div className="hot-question-list-items">
                 {hotquestionList}
            </div>
    );
}
export default HotQuestionList;