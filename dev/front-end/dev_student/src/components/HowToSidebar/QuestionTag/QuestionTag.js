import React, {Component} from 'react';
import './QuestionTag.css';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

class QuestionTag extends Component{
    render(){
        const {idx,tagname,tagcount} = this.props;
        const liststyle={
            fontSize:'13px',
            width:'100%',
            textAlign:'left',
            borderRadius:"0",
            borderTop:"0",
            borderLeft:"0",
            borderRight:"0",
            borderBottom:"0",
            paddingLeft:"0.6rem",
            paddingTop:"0.40rem",
            paddingBottom:"0.40rem",
            
        }

        const badge_style={
            fontWeight:'400',
            textAlign:'center',
            marginLeft:'15px'
        }

        return(
            <ListGroup width='100%'>
                <ListGroupItem className="justify-content-between" style={liststyle}>{tagname}  <Badge pill style={badge_style} >{tagcount}</Badge></ListGroupItem>
            </ListGroup>
        );
    }
}
export default QuestionTag;