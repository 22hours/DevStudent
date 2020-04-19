import React, { Component } from "react";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";

//css
import "./QuestionTagItem.css";

class QuestionTagItem extends Component {
    render() {
        const { idx, tagname, tagcount } = this.props;
        const liststyle = {
            fontSize: "13px",
            width: "100%",
            textAlign: "left",
            borderRadius: "0",
            borderTop: "0",
            borderLeft: "0",
            borderRight: "0",
            borderBottom: "0",
            paddingLeft: "0.6rem",
            paddingTop: "0.40rem",
            paddingBottom: "0.20rem",
            paddingRight: "0.6rem",
        };

        const badge_style = {
            fontWeight: "400",
            textAlign: "center",
            margin: "5px",
        };

        return (
            <ListGroup width="100%">
                <ListGroupItem className="howto-list-group-wrapper" style={liststyle}>
                    <span className="howto-list-group-item-tagname">{tagname}</span>
                    <span>X</span>
                    <Badge pill style={badge_style}>
                        {tagcount}
                    </Badge>
                </ListGroupItem>
            </ListGroup>
        );
    }
}
export default QuestionTagItem;
