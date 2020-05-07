import React, { useState, useEffect } from "react";

const ImgPreviewModule = ({ img }) => {
    const [preview, setPreview] = useState();

    // const imgList = img;
    // console.log(imgList);
    // console.log(imgList?.length);
    useEffect(() => {
        var imgList = img.split("^-^");
        console.log(imgList);
        if (imgList[0] !== "") {
            const renderPreiew = imgList.map((it) => <img src={it} />);
            setPreview(renderPreiew);
        } else {
            setPreview("");
        }
    }, [img]);
    return <div className="preview-img-box">{preview}</div>;
};

export default ImgPreviewModule;
