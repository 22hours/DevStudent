import React, { Component } from "react";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";

//css
import "./QuestionTagItem.css";

//icons
import VisibilityIcon from "@material-ui/icons/Visibility";
import ClearIcon from "@material-ui/icons/Clear";
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
            <div width="100%">
                <div className="howto-list-group-wrapper">
                    <span className="howto-list-group-item-tagname">{tagname}</span>
                    <span id="x">
                        <ClearIcon style={{ fontSize: "10px" }} />
                    </span>
                    <span id="tagcount">
                        {" "}
                        <VisibilityIcon style={{ fontSize: "10px" }} />
                        &nbsp;
                        {tagcount}
                    </span>
                    {/* <Badge pill style={badge_style}>
                        {tagcount}
                    </Badge> */}
                </div>
            </div>
        );
    }
}
export default QuestionTagItem;
