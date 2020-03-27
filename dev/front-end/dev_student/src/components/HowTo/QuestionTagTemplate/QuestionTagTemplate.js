import React,{Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import QuestionTagHeader from'../QuestionTagHeader/QuestionTagHeader';
import './QuestionTagTemplate.css';
import QuestionTagList from '../QuestionTagList/QuestionTagList';

class QuestionTagTemplate extends Component {
    render(){
        const {tag} = this.props;
        
        return(
            <Container className="question-tag-wrapper" >
                <Row  className="question-tag-header-wrapper">
                    <QuestionTagHeader/>
                </Row>
                <Row className="question-tag-list-wrapper">
                    <QuestionTagList tag={tag}>
                    </QuestionTagList>
                </Row>
            </Container>
        );
    }
}
export default QuestionTagTemplate;