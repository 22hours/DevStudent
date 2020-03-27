import React from 'react';
import MarkDownTest1 from '../../MarkDownTEst/MarkDownTest1.md';

const HowToReply = ({contents}) => {
    const ReactMarkdown = require('react-markdown/with-html')
      
    const markdown2 = MarkDownTest1; 

    return (
        
        <ReactMarkdown
  source={markdown2}
  escapeHtml={false}
/>
    );
}

export default HowToReply;