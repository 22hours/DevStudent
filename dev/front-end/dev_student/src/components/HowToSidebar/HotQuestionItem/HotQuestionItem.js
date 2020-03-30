import React,{Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import './HotQuestionItem.css'
class HotQuestionItem extends Component{

    render(){
        const {idx, views, text} = this.props;
     
       return(
            <div className="howto-hot-question-item-wrapper">
                <div className="howto-hot-question-item-col-text" >{text}</div>
                <div className="howto-hot-question-item-col-views" > {views}</div>
            </div>
       );
    }
}
export default HotQuestionItem;