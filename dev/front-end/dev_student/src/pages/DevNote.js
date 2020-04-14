import React from "react";
import { Container } from "reactstrap";

//atoms
import MarkdownParser from "atom/MarkdownParser/MarkdownParser";

// items
import { text } from "item/DevNoteJson/DevNoteJsonItem.txt";
const DevNote = () => {
    return (
        <React.Fragment>
            <Container style={{ marginTop: "50px" }}>
                <MarkdownParser content={text} />
            </Container>
        </React.Fragment>
    );
};

export default DevNote;
