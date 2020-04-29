import React, { useState } from "react";
import classnames from "classnames";
import "./MarkdownEditor.css";
import { Alert, Collapse, Input, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//atom
import MarkdownParser from "./node_modules/atom/MarkdownParser/MarkdownParser";

const MarkdownEditor = ({ comment, setComment, children }) => {
    // const [comment, setComment] = useState("");
    const [activeTab, setActiveTab] = useState("1");
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => setIsOpen(!isOpen);
    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };
    const handleH1 = () => {
        console.log(comment);
        setComment(comment + "# ");
    };
    const handleCode = () => {
        setComment(comment + "```\nyour code is here\n```");
    };
    const handleQuote = () => {
        setComment(comment + "> ");
    };
    const handleBold = () => {
        setComment(comment + "**strong text**");
    };
    const handleItalic = () => {
        setComment(comment + "*italic text*");
    };
    return (
        <React.Fragment>
            <div className="markdown-eiditor-wrapper">
                <div className="markdown-editor-header">
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === "1" })}
                                onClick={() => {
                                    toggle("1");
                                }}
                            >
                                Wrtie
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === "2" })}
                                onClick={() => {
                                    toggle("2");
                                }}
                            >
                                Previews
                            </NavLink>
                        </NavItem>
                        <Link id="test" color="primary" onClick={toggleCollapse}>
                            Markdown?
                        </Link>
                    </Nav>
                </div>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Collapse isOpen={isOpen}>
                            <Alert color="info">
                                <div className="markdown-editor-button-box">
                                    <button onClick={handleBold}>B</button>
                                    <button onClick={handleItalic}>I</button>
                                    <button onClick={handleH1}>H1</button>
                                    <button onClick={handleCode}>{"code"}</button>
                                    <button onClick={handleQuote}>quote</button>
                                </div>
                            </Alert>
                        </Collapse>
                        <Input
                            placeholder="Write.."
                            value={comment}
                            onChange={({ target: { value } }) => setComment(value)}
                            size="large"
                            type="textarea"
                        ></Input>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <div className="reply-wrapper">
                                    <MarkdownParser content={comment} />
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    {children}
                </TabContent>
            </div>
        </React.Fragment>
    );
};

export default MarkdownEditor;
