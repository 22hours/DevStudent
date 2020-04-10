import React from "react";
import "./Tag.css";
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
