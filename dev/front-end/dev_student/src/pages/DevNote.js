import React from "react";
import { Container } from "reactstrap";

//pageTemplate
import AboutUsPageTemplate from "page-template/AboutUsPageTemplate/AboutUsPageTemplate";
//atoms
import MarkdownParser from "atom/MarkdownParser/MarkdownParser";
// items
import { text } from "item/DevNoteJson/DevNoteJsonItem.txt";
const DevNote = () => {
    return (
        <React.Fragment>
            {/* <Container style={{ marginTop: "50px" }}>
                <MarkdownParser content={text} />
            </Container> */}
            <AboutUsPageTemplate />
        </React.Fragment>
    );
};

export default DevNote;
