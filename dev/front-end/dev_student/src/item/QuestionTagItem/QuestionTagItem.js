import React from "react";

//css
import "./QuestionTagItem.css";

//icons
import VisibilityIcon from "@material-ui/icons/Visibility";
import ClearIcon from "@material-ui/icons/Clear";

const QuestionTagItem = ({ tagcount, tagname }) => {
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
            </div>
        </div>
    );
};
export default QuestionTagItem;
