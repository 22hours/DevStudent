import React from "react";

// css
import "./HotQuestionItem.css";

//icons
//import VisibilityIcon from "@material-ui/icons/Visibility";
import LinkIcon from "@material-ui/icons/Link";
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
