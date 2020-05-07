import React, { useState, useEffect } from "react";

const ImgPreviewModule = ({ img }) => {
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
                <img onClick={() => handleCopyImgLink(it)} id="preview-img" key={it} src={it} />
            ));
            setPreview(renderPreiew);
        } else {
            setPreview("");
        }
    }, [img]);
    return <div className="preview-img-box">{preview}</div>;
};

export default ImgPreviewModule;
