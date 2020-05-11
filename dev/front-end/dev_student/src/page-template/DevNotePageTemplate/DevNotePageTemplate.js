import React, { useState, useEffect } from "react";
import "./DevNotePageTemplate.css";
import axios from "axios";
import { Container } from "reactstrap";

const DevNoteItem = (props) => {
    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [date, setDate] = useState();
    const [preview, setPreview] = useState();
    console.log(props.name);
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
                console.log(response);
                setPreview(response.data.split("&&&")[0]);
            })
            .catch(() => alert("error!"));
    }, [1]);
    return (
        <div className="DevNoteItem">
            <div className="img-row"></div>
            <div className="item-row">
                <div className="title-row"> {title}</div>
                <div className="preview-row">{preview}</div>
                <div className="date-row"> {date}</div>
            </div>
        </div>
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
            .catch(() => console.log("error!"));
    }, [1]);
    return <React.Fragment>{item}</React.Fragment>;
};

const DevNotePageTemplate = () => {
    return (
        <div className="DevNotePageTemplate">
            <Container>
                <DevNoteProvider />
            </Container>
        </div>
    );
};

export default DevNotePageTemplate;
