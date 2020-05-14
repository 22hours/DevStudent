import React from "react";

// css
import "./HotQuestionItem.css";

//icons
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

//import VisibilityIcon from "@material-ui/icons/Visibility";
// import LinkIcon from "@material-ui/icons/Link";
// import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const HotQuestionItem = ({ id, likesCount, title }) => {
    var hotTitle = "";
    hotTitle = title;
    if (hotTitle.length > 25) {
        hotTitle = hotTitle.substr(0, 25) + "...";
    }
    return (
        <div width="100%">
            <div className="hot-links-list-group-item">
                <span>
                    &nbsp;
                    <ThumbUpIcon style={{ fontSize: "10px" }} color="action" />
                </span>
                <span id="views">{likesCount}</span>
                &nbsp;&nbsp;
                <a href={"/howto/question/" + id}>
                    {/* <FiberManualRecordIcon style={{ fontSize: "5px", color: "gray" }} /> {hotTitle}{" "} */}
                    {hotTitle}
                </a>
            </div>
        </div>
    );
};

export default HotQuestionItem;
