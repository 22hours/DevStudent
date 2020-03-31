import React,{Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import './HotQuestionItem.css'
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

class HotQuestionItem extends Component{

    render(){
        const {idx, views, text} = this.props;
        const list_style={
            fontSize:'14px',
            width:'100%',
            textAlign:'center'
        }
        const badge_style={
            fontWeight:'400',
            textAlign:'center'
        }
       return(
        <ListGroup width='100%'>
            <ListGroupItem className="justify-content-between" style={list_style}>{text} <Badge pill style={badge_style}>{views}</Badge></ListGroupItem>
        </ListGroup>
       );
    }
}
export default HotQuestionItem;