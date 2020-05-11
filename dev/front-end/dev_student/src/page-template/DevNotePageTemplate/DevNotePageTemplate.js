import React, { useState, useEffect } from "react";
import "./DevNotePageTemplate.css";
import axios from "axios";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import MarkdownContent from "atom/MarkdownParser/MarkdownParser";
const DevNoteItem = (props) => {
    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [date, setDate] = useState();
    const [preview, setPreview] = useState();
    useEffect(() => {
        var text = props.name.split(".")[0];
        var rawDate = text.split("_")[0];
        var rawTitle = text.split("_")[1];
        var rawAuthor = text.split("_")[2];
        setTitle(rawTitle);
        setDate(rawDate);
        setAuthor(rawAuthor);
        axios
            .get("https://raw.githubusercontent.com/22hours/DevStudent/devnote/devnote/" + props.name)
            .then((response) => {
                setPreview(response.data.split("&&&")[0]);
            })
            .catch(() => alert("error!"));
    }, [1]);
    return (
        <Link to={"/devnote/" + props.name}>
            <div
                className="DevNoteItem"
                // onClick={() => (window.location.href = "/devnote/content")}
            >
                <div className="img-row"></div>
                <div className="item-row">
                    <div className="title-row"> {title}</div>
                    <div className="preview-row">{preview}</div>
                </div>
                <div className="item-row author">
                    {author} <div className="date-row"> {date}</div>
                </div>
            </div>
        </Link>
    );
};

const DevNoteProvider = () => {
    const [item, setItem] = useState();
    useEffect(() => {
        axios
            .get("https://api.github.com/repos/22hours/DevStudent/contents/devnote?ref=devnote")
            .then((response) => {
                setItem(response.data.map((it) => <DevNoteItem {...it} />));
            })
            .catch(() => alert("error"));
    }, [1]);
    return <React.Fragment>{item}</React.Fragment>;
};

const DevNoteContentProvider = ({ path }) => {
    const [item, setItem] = useState();
    useEffect(() => {
        const url = "https://raw.githubusercontent.com/22hours/DevStudent/devnote/devnote/" + path;
        if (path) {
            axios
                .get(url)
                .then((response) => {
                    setItem(response.data.split("&&&")[1]);
                })
                .catch(() => alert("error!"));
        }
    }, [path]);

    return (
        <React.Fragment>
            <MarkdownContent content={item} />
        </React.Fragment>
    );
};

const DevNotePageTemplate = ({ location }) => {
    const [path, setPath] = useState();
    useEffect(() => {
        var rawPath = location.pathname?.split("/")[2];
        if (!rawPath) {
            setPath("main");
        } else {
            setPath(rawPath);
        }
    }, [location]);
    const ConditionRender = () => {
        if (path === "main") {
            return <DevNoteProvider />;
        } else {
            return <DevNoteContentProvider path={path} />;
        }
    };
    return (
        <div className="DevNotePageTemplate">
            <Container>
                <div className="page-header">
                    <span id="header">Dev Notes</span>
                </div>
                <ConditionRender />
            </Container>
        </div>
    );
};

export default DevNotePageTemplate;
