import React from "react";
import "./Tag.css";
import { Link } from "react-router-dom";
const Tag = ({ tagItem }) => {
    return (
        <React.Fragment>
            <Link to="/" className="tag">
                {tagItem}
            </Link>
        </React.Fragment>
    );
};

export default Tag;
