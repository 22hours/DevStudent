import React from 'react';
import MarkDownTest1 from '../../MarkDownTEst/MarkDownTest1.md';
import ReactMarkdown from 'react-markdown'

const HowToReply = ({contents}) => {
    const ReactDOM = require('react-dom')
    const htmlParser = require('react-markdown/plugins/html-parser')
    const ReactMarkdown = require('react-markdown/with-html')
    const parseHtml = htmlParser({
        isValidNode: node => node.type !== 'script',
        processingInstructions: [/* ... */]
      })
      
    const markdown = `
    <code>welcome</code>
    `
    const markdown2 = MarkDownTest1; 

    return (
        
        <ReactMarkdown
  source={markdown2}
  escapeHtml={false}
/>
    );
}

export default HowToReply;