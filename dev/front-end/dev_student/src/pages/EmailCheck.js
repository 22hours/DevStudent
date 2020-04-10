import React from "react";
import {} from "../mutation/mutations";

import EmailCheckPageTemplate from "page-template/EmailCheckPageTemplate/EmailCheckPageTemplate";

const EmailCheck = ({ match }) => {
    return <EmailCheckPageTemplate rand={match.params.rand}></EmailCheckPageTemplate>;
};

export default EmailCheck;
