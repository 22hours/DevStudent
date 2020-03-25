import React, {Component, Fragment} from 'react';
import './QuestionTag.css';
import {ButtonGroup} from 'reactstrap';
import {Button} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

class QuestionTag extends Component{
    render(){
        const count_style={
            background: 'white',
            color: 'black'
        }
        const btn_group_style={
            float:'left',
            marginRight:'12px',
            marginBottom:'0.6%'
        }
        return(
            <Container>
            <ButtonGroup arial-label="Basic example" style = {btn_group_style} className="question-tag-group">
                <Button variant="secondary" >JavaScript</Button>
                <Button  disabled variant="secondary" className="question-tag-button-count" style={count_style}>500</Button>
            </ButtonGroup>
            <ButtonGroup arial-label="Basic example" style = {btn_group_style} className="question-tag-group">
                <Button variant="secondary" >.NetFramework</Button>
                <Button disabled variant="secondary" style={count_style}>100</Button>
            </ButtonGroup>
            <ButtonGroup arial-label="Basic example" style = {btn_group_style} className="question-tag-group">
                <Button variant="secondary" >C++</Button>
                <Button disabled variant="secondary" style={count_style}>400</Button>
            </ButtonGroup>
            <ButtonGroup arial-label="Basic example" style = {btn_group_style} className="question-tag-group">
                <Button variant="secondary" >Android</Button>
                <Button disabled variant="secondary" style={count_style}>300</Button>
            </ButtonGroup>
            </Container>
        );
    }
}
export default QuestionTag;