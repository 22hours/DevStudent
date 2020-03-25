import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import HotQuestionHeader from '../HotQuestionHeader/HotQuestionHeader';
import HotQuestionList from '../HotQuestionList/HotQuestionList';
import './HotQuestionTemplate.css';

class HotQuestionTemplate extends Component{
    render(){
        const{ hot } = this.props;
        return(
            <Container className="howto-hot-question-wrapper">
                <Row  className="howto-hot-question-header-wrapper">
                    <HotQuestionHeader/>
                </Row>
                <Row  className="howto-hot-question-list-wrapper">
                    <HotQuestionList
                    hot={hot}>
                    </HotQuestionList>
                </Row>
            </Container>
        );
    }
}
export default HotQuestionTemplate;