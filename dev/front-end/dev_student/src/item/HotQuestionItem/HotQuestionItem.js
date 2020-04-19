import React from "react";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";

// css
import "./HotQuestionItem.css";

const HotQuestionItem = ({ id, views, title }) => {
    const list_style = {
        fontSize: "11px",
        width: "100%",
        textAlign: "left",
        borderTop: "0",
        borderLeft: "0",
        borderRight: "0",
        paddingLeft: "0.6rem",
        paddingTop: "0.40rem",
        paddingBottom: "0.40rem",
        // color:"#034390"
    };
    const badge_style = {
        fontWeight: "400",
        textAlign: "center",
        // backgroundColor:'white',
        // color:'gray'
    };

    return (
        <ListGroup width="100%">
            <ListGroupItem className="hot-links-list-group-item" style={list_style}>
                {title}{" "}
                <Badge pill style={badge_style}>
                    {views}
                </Badge>
            </ListGroupItem>
        </ListGroup>
    );
};

export default HotQuestionItem;
