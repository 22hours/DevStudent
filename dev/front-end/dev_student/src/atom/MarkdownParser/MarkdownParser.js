import React from "react";
import ReactMarkdown from "react-markdown";
import "./MarkdownParser.css";

const MarkdownContent = ({ content }) => {
    return (
        <div className="mark-down-wrapper">
            <ReactMarkdown source={content} escapeHtml={true} />
        </div>
    );
};

export default MarkdownContent;
