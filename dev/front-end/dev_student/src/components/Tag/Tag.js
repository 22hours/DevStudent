import React from "react";
import "./Tag.css";
import { Link } from "react-router-dom";
const Tag = ({ tagItem, history }) => {
    return (
        <React.Fragment>
            <a href={"/howto?tags=" + tagItem} className="tag">
                {tagItem}
            </a>
        </React.Fragment>
    );
};

export default Tag;
