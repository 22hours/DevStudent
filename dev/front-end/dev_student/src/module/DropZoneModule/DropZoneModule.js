import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Spinner } from "reactstrap";
import "./DropZoneModule.css";

// rest
import { POST, UPLOAD_DUMMY_FILE } from "rest";

const DropZoneModule = ({ handleImg }) => {
    const [loading, setLoading] = useState(false);
    const uploadDummy = async (formData) => {
        const data = await POST("post", UPLOAD_DUMMY_FILE, formData);
        if (data.fileDownloadUri) {
            handleImg(data.fileDownloadUri, data.fileName);
        }
    };
    const onDrop = useCallback((acceptedFiles) => {
        //, Accept: "multipart/form-data"
        setLoading(true);
        console.log(acceptedFiles);
        console.log(acceptedFiles[0]?.size);
        if (acceptedFiles[0]?.size > 250000) {
            alert("25KB 이상의 이미지는 넣을 수 없습니다");
            return;
        }
        var reg = /(.*?)\.(jpg|jpeg|png|gif|bmp)$/;
        if (acceptedFiles[0].name.match(reg)) {
            const formData = new FormData();
            formData.append("file", acceptedFiles[0]);
            uploadDummy(formData);
        } else {
            alert("해당 파일은 이미지 파일이 아닙니다.");
            return;
        }
        setLoading(false);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const InActive = () => {
        return (
            <div className="DropZoneModule">
                <p>이미지를 드래그 or 여기를 클릭</p>
            </div>
        );
    };

    const Active = () => {
        return (
            <div className="DropZoneModule">
                <p>여기로 떨어뜨려 주세요!</p>
            </div>
        );
    };

    const DropZone = () => {
        if (loading)
            return (
                <div className="DropZoneModule">
                    <p>Loading Now</p>
                </div>
            );
        else {
            if (isDragActive) {
                return <Active />;
            } else {
                return <InActive />;
            }
            // {isDragActive ? return <Active /> : return <InActive />}
        }
    };

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {/* {isDragActive ? <Active /> : <InActive />} */}
            <DropZone loading={loading} />
        </div>
    );
};

export default DropZoneModule;
