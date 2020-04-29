import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Spinner } from "reactstrap";
const DropZoneModule = ({ imgs, setImgs, handleImg }) => {
    const [nowUploading, setNowUploading] = useState(false);
    const onDrop = useCallback((acceptedFiles) => {
        // 이미지 서버 한테 POST 를 보내

        // response를 받아

        // 그걸 추가해 !

        // var imgList = imgs;
        // imgList.push(acceptedFiles);
        // console.log(imgList);
        // setImgs(imgList);
        console.log(acceptedFiles[0].name);
        handleImg(acceptedFiles[0].name);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const Ret = () => {
        if (!nowUploading) {
            return (
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {isDragActive ? <p>Drop the files here ...</p> : <p>이미지를 드래그하거나, 클릭해서 추가하기</p>}
                </div>
            );
        } else {
            return <Spinner />;
        }
    };

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? <p>Drop the files here ...</p> : <p>이미지를 드래그하거나, 클릭해서 추가하기</p>}
        </div>
    );
};

export default DropZoneModule;
