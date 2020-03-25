import React,{Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import './HotQuestionItem.css'
class HotQuestionItem extends Component{

    render(){
        const {idx, id, views, text} = this.props;
     
       return(
           
           <Container>
               <Row className="howto-hot-temp-row">
                   <Col className="howto-hot-question-col-id" md={2}>{id}</Col>
                   <Col className="howto-hot-question-col-text">{text}</Col>
                   <Col className="howto-hot-question-col-views" md = {2}> {views}</Col>
               </Row>
           </Container>
       );
       
    }
}
export default HotQuestionItem;