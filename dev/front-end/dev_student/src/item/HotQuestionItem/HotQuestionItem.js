import React from "react";

// css
import "./HotQuestionItem.css";

//icons
import VisibilityIcon from "@material-ui/icons/Visibility";
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
    const badge_style = {
        fontWeight: "400",
        textAlign: "center",
        // backgroundColor:'white',
        // color:'gray'
    };

    return (
        <div width="100%">
            <div className="hot-links-list-group-item">
                <LinkIcon style={{ fontSize: "10px", color: "gray" }} /> {title}{" "}
                <span id="views">
                    {" "}
                    &nbsp;
                    {views}
                </span>
                {/* <Badge pill style={badge_style}>
                    {views}
                </Badge> */}
            </div>
        </div>
    );
};

export default HotQuestionItem;
