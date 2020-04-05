import React from 'react';
import ReactMarkdown from 'react-markdown'
import './MarkdownContent.css'

const MarkdownContent = ({content}) =>{
    return(
        <div className="mark-down-wrapper">
        <ReactMarkdown
        source={content}
        escapeHtml={false}/>
        </div>
    );
}

export default MarkdownContent;