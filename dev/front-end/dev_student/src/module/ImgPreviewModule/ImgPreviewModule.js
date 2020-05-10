import React, { useState, useEffect } from "react";
import "./ImgPreviewModule.css";
import CancelIcon from "@material-ui/icons/Cancel";
const ImgPreviewModule = ({ img, handleDeleteImg }) => {
    const [preview, setPreview] = useState();
    const handleCopyImgLink = (src) => {
        var copyvalue = "![](" + src + ")";
        var newElement = document.createElement("textarea");
        newElement.value = copyvalue;
        document.body.appendChild(newElement);
        newElement.select();
        document.execCommand("copy");
    };
    useEffect(() => {
        var imgList = img.split("^-^");
        if (imgList[0] !== "") {
            const renderPreiew = imgList.map((it) => (
                <div className="preview-img-wrapper">
                    <div className="preview-img-box">
                        <img onClick={() => handleCopyImgLink(it)} id="preview-img" key={it} src={it} />
                    </div>
                    <div className="preview-control-box" onClick={() => handleDeleteImg(it)}>
                        <CancelIcon />
                    </div>
                </div>
            ));
            setPreview(renderPreiew);
        } else {
            setPreview("");
        }
    }, [img]);
    return <div className="ImgPreviewModule">{preview}</div>;
};

export default ImgPreviewModule;
