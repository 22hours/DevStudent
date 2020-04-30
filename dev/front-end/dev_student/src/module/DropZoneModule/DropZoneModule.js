import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Spinner } from "reactstrap";
import axios from "axios";
const DropZoneModule = ({ imgLink, setImgLink, handleImg, comment, imgCount, setImgCount }) => {
    const limitCheck = () => {
        if (imgCount > 1) {
            alert("이미지는 2장만 넣을 수 있습니다");
            return false;
        }
        setImgCount(imgCount + 1);
        return true;
    };

    const onDrop = useCallback((acceptedFiles) => {
        //, Accept: "multipart/form-data"
        console.log(acceptedFiles);
        var reg = /(.*?)\.(jpg|jpeg|png|gif|bmp)$/;
        if (acceptedFiles[0].name.match(reg)) {
            const formData = new FormData();
            formData.append("file", acceptedFiles[0]);
            axios
                .post("http://172.30.1.50:8110/uploadDummyFile", formData)
                .then((response) => {
                    console.log(response);
                    var sessionImgList = JSON.parse(sessionStorage.getItem("devstu_imgs"));
                    if (sessionImgList) {
                        if (sessionImgList.length >= 3) {
                            alert("3개 이상의 이미지는 넣을 수 없습니다");
                            return;
                        }
                        sessionImgList.push(response.data.fileName);
                        sessionStorage.setItem("devstu_imgs", JSON.stringify(sessionImgList));
                    } else {
                        console.log("저장된 이미지 없으므로 생성");
                        sessionImgList = new Array();
                        sessionImgList.push(response.data.fileName);
                        sessionStorage.setItem("devstu_imgs", JSON.stringify(sessionImgList));
                    }
                    handleImg(response.data.fileDownloadUri);
                })
                .catch((error) => {});
        } else {
            alert("해당 파일은 이미지 파일이 아닙니다.");
            return;
        }

        // axios
        //     .post(
        //         "http://172.30.1.48:8090/upload",
        //         { formData },
        //         {
        //             headers: { "Content-Type": "multipart/form-data", Accept: "multipart/form-data" },
        //         }
        //     )
        //     .then((response) => {
        //         console.log(response);
        //     })
        //     .catch((error) => {});
        // if (limitCheck) {

        //     console.log(acceptedFiles[0]);

        // }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? <p>여기로 떨어뜨려 주세요!</p> : <p>이미지를 드래그하거나, 클릭해서 추가하기</p>}
        </div>
    );
};

export default DropZoneModule;
