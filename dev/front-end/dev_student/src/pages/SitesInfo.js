import React from "react";
import { Container } from "reactstrap";

//page-templates
import SitesInfoPageTemplate from "page-template/SitesInfoPageTemplate/SitesInfoPageTemplate";

const SitesInfo = ({ match }) => {
    const InfoTypeRenderer = () => {
        switch (match.params.infotype) {
            case "privacy":
                return <React.Fragment>privacy</React.Fragment>;
            case "terms":
                return <React.Fragment>terms</React.Fragment>;
            default:
                return <React.Fragment>404</React.Fragment>;
        }
    };
    return (
        <SitesInfoPageTemplate contents={"헤헤헿겧겧하악"}>
            <InfoTypeRenderer />
        </SitesInfoPageTemplate>
    );
};
export default SitesInfo;
