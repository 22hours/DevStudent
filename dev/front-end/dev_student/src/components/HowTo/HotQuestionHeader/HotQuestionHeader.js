import React, {Component} from 'react'
import { Container, Row, Col } from 'reactstrap';
import './HotQuestionHeader.css';

class HotQuestionHeader extends Component{
    render(){
        return(
            <div className="hot-question-header">
                Hot Questions
            </div>
        );
    }
}
export default HotQuestionHeader;