import React from 'react';
import {} from '../Mutation/mutations'
import EmailCheckTemplate from '../components/EmailCheck/EmailCheckTemplate/EmailCheckTemplate';
const EmailCheck = ({match}) => {
    return(
        
        <EmailCheckTemplate 
            rand={match.params.rand}>
        </EmailCheckTemplate>

    );
}

export default EmailCheck;