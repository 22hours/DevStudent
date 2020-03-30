import React, {Component, Fragment} from 'react';
import './QuestionTag.css';
import {ButtonGroup} from 'reactstrap';
import {Button} from 'reactstrap';


class QuestionTag extends Component{
    render(){
        const count_style={
            background: 'white',
            color: 'black'
        }
        const btn_group_style={
            float:'left',
            marginRight:'5px',
            marginTop:'3px',
            fontSize:'10px'
        }
        const {idx,tagname,tagcount} = this.props;
        return(
                <ButtonGroup size = "sm" arial-label="Basic example" style = {btn_group_style} className="question-tag-group">
                    <Button variant="secondary"  className="question-tag-button-name">{tagname}</Button>
                    <Button  disabled variant="secondary" className="question-tag-button-count" style={count_style}>{tagcount}</Button>
                </ButtonGroup>
        );
    }
}
export default QuestionTag;