import React, { useState, useEffect } from "react";
import classnames from "classnames";
import "./MarkdownEditorModule.css";
import { Alert, Collapse, Input, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//atom
import MarkdownParser from "atom/MarkdownParser/MarkdownParser";

// module
import DropZoneModule from "module/DropZoneModule/DropZoneModule";
import ImgPreviewModule from "module/ImgPreviewModule/ImgPreviewModule";

//icons
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import CodeIcon from "@material-ui/icons/Code";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";

const MarkdownEditorModule = ({ comment, setComment, children, limit }) => {
    // const [comment, setComment] = useState("");
    const [activeTab, setActiveTab] = useState("1");
    const [imgLink, setImgLink] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [img, setImg] = useState("");

    const [imgCount, setImgCount] = useState(0);
    const handleInputImg = (acceptedFile) => {
        var imgList = img;
        imgList.push(acceptedFile);
        setImg(imgList);
    };

    const toggleCollapse = () => setIsOpen(!isOpen);
    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const handleH1 = () => {
        console.log(comment);
        setComment(comment + "# ");
    };
    const handleCode = () => {
        setComment(comment + "```\n your code is here \n ```");
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
    const handleImg = (name) => {
        setImgLink("![](" + name + ")");
    };

    useEffect(() => {
        console.log("img change!");
    }, [img]);

    useEffect(() => {
        sessionStorage.removeItem("devstu_imgs");
    }, [1]);

    useEffect(() => {
        if (imgLink === "") return;

        var linkTemp = imgLink?.split("(")[1];
        var link = linkTemp?.split(")")[0];
        // var link = linkTemp.split("]")[0];
        if (img === "") setImg(link);
        else setImg(img + "^-^" + link);

        setComment(comment + "\n" + imgLink);
    }, [imgLink]);

    const handleCopyLink = () => {
        var newElement = document.createElement("textarea");
        newElement.value = imgLink;
        document.body.appendChild(newElement);
        newElement.select();
        document.execCommand("copy");
    };

    const CopyImgLinkDiv = () => {
        if (imgLink === "") {
            return <React.Fragment></React.Fragment>;
        } else {
            return (
                <Alert color="info" id="imgCopyButton" onClick={handleCopyLink}>
                    <p>이미지 링크 재 복사는 해당 이미지 클릭</p>
                </Alert>
            );
        }
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
                                    <button onClick={handleBold}>
                                        <FormatBoldIcon style={{ color: "gray", fontSize: "20px" }} />
                                    </button>
                                    <button onClick={handleItalic}>
                                        <FormatItalicIcon style={{ color: "gray", fontSize: "20px" }} />
                                    </button>
                                    <button onClick={handleH1}>
                                        <FormatUnderlinedIcon style={{ color: "gray", fontSize: "20px" }} />
                                    </button>
                                    <button onClick={handleCode}>
                                        <CodeIcon style={{ color: "gray", fontSize: "20px" }} />
                                    </button>
                                    <button onClick={handleQuote}>
                                        <FormatQuoteIcon style={{ color: "gray", fontSize: "20px" }} />
                                    </button>
                                </div>
                            </Alert>
                        </Collapse>
                        <Input
                            maxLength={limit}
                            placeholder="Write.."
                            value={comment}
                            onChange={({ target: { value } }) => {
                                setComment(value);
                            }}
                            size="large"
                            type="textarea"
                        ></Input>

                        <CopyImgLinkDiv />
                        <DropZoneModule
                            imgCount={imgCount}
                            setImgCount={setImgCount}
                            handleImg={handleImg}
                            handleInputImg={handleInputImg}
                        />
                        <ImgPreviewModule img={img} />
                        {/* {img} */}
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

export default MarkdownEditorModule;
