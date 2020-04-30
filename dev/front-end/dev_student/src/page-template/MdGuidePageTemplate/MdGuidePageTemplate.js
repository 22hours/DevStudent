import React, { useState, useEffect } from "react";
import "./MdGuidePageTemplate.css";
import { Container, Col, Row } from "reactstrap";

// icons
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import MarkdownParser from "atom/MarkdownParser/MarkdownParser";
const MdGuidePageTemplate = () => {
    const [content, setContent] = useState("");
    const mdguidePath = require("../../util/mdguide.txt");
    useEffect(() => {
        fetch(mdguidePath)
            .then((r) => r.text())
            .then((text) => {
                setContent(text);
            });
    }, [1]);

    return (
        <div className="MdGuidePageTemplate">
            <Container>
                <Row>
                    <Col md={6} className="editor-col">
                        <EditIcon /> EDIT
                        <textarea
                            id="editor"
                            value={content}
                            onChange={({ target: { value } }) => {
                                setContent(value);
                            }}
                        ></textarea>
                    </Col>
                    <Col md={6} className="preview-col">
                        <VisibilityIcon /> PREVIEW
                        <div className="preview">
                            <MarkdownParser content={content} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MdGuidePageTemplate;
