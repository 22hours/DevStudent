import React from 'react';

const EmailCheck = ({match}) => {
    return(
        <div>{match.params.rand}</div>
    );
}

export default EmailCheck;