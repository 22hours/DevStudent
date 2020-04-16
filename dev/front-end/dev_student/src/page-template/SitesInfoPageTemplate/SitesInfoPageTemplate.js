import React from "react";
import "./SitesInfoPageTemplate.css";
import { Container } from "reactstrap";
const SitesInfoPageTemplate = ({ contents, children }) => {
    return (
        <div className="SitesInfoPageTemplate">
            <Container>{children}</Container>
        </div>
    );
};
export default SitesInfoPageTemplate;
