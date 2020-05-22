import React from "react";
import Pagination from "@material-ui/lab/Pagination";

const PageNavigation = ({ questionCount, handleChange, pageNum }) => {
    const navigation_style = {
        paddinLeft: "0px",
        marginBottom: "18px",
    };

    let pageCount = null;

    if (questionCount % 10 === 0) pageCount = questionCount / 10;
    else pageCount = Math.floor(questionCount / 10) + 1;

    return (
        <Pagination
            style={navigation_style}
            count={pageCount}
            variant="outlined"
            page={pageNum}
            onChange={handleChange}
            shape="rounded"
        />
    );
};
export default PageNavigation;
