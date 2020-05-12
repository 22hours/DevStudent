import React from "react";

//css
import "./QuestionTagItem.css";

//icons
import VisibilityIcon from "@material-ui/icons/Visibility";
import ClearIcon from "@material-ui/icons/Clear";

const QuestionTagItem = ({ count, name }) => {
    const noNbspName = name.replace(" ", "");
    return (
        <div width="100%">
            <div className="howto-list-group-wrapper">
                <a href={"/howto?tags=" + noNbspName} className="tag">
                    <span className="howto-list-group-item-tagname">{noNbspName}</span>
                </a>
                <span id="x">
                    <ClearIcon style={{ fontSize: "10px" }} />
                </span>
                <span id="tagcount"> {count}</span>
            </div>
        </div>
    );
};
export default QuestionTagItem;
