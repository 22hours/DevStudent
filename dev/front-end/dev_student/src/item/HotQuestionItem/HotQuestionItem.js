import React from "react";

// css
import "./HotQuestionItem.css";

//icons
//import VisibilityIcon from "@material-ui/icons/Visibility";
import LinkIcon from "@material-ui/icons/Link";
const HotQuestionItem = ({ id, views, title }) => {
    var hotTitle = "";
    hotTitle = title;
    if (hotTitle.length > 25) {
        hotTitle = hotTitle.substr(0, 25) + "...";
    }
    return (
        <div width="100%">
            <div className="hot-links-list-group-item">
                <a href={"/howto/question/" + id}>
                    <LinkIcon style={{ fontSize: "14px", color: "gray" }} /> {hotTitle}{" "}
                </a>
                <span id="views">
                    {" "}
                    &nbsp;
                    {views}
                </span>
            </div>
        </div>
    );
};

export default HotQuestionItem;
