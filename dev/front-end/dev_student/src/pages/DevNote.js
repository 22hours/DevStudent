import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import axios from "axios";
//pageTemplate
import DevNotePageTemplate from "page-template/DevNotePageTemplate/DevNotePageTemplate";
//atoms
import MarkdownParser from "atom/MarkdownParser/MarkdownParser";
// items
import { text } from "item/DevNoteJson/DevNoteJsonItem.txt";
const DevNote = ({ location }) => {
    const [readme, setReadme] = useState();
    useEffect(() => {
        axios.get("https://raw.githubusercontent.com/22hours/DevStudent/master/Update.md").then((response) => {
            setReadme(response.data);
        });
    }, [1]);
    return (
        <React.Fragment>
            {/* <Container style={{ marginTop: "50px" }}>
                <MarkdownParser content={text} />
            </Container> */}
            {/* <AboutUsPageTemplate /> */}
            {/* <Container style={{ paddingTop: "20px" }}>
                <MarkdownParser content={readme} />
            </Container> */}
            <DevNotePageTemplate location={location} />
        </React.Fragment>
    );
};

export default DevNote;
