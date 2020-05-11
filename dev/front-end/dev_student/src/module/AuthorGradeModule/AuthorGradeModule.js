import React from "react";
import "./AuthorGradeModule.css";

const AuthorGradeModule = ({ authorNickname, authorGrade }) => {
    var gradeColor = "";
    if (authorGrade === "bean") gradeColor = "";
    if (authorGrade === "short") gradeColor = "green";
    if (authorGrade === "tall") gradeColor = "blue";
    if (authorGrade === "grande") gradeColor = "purple";
    if (authorGrade === "venti") gradeColor = "orange";
    if (authorGrade === "trenta") gradeColor = "red";
    if (authorGrade === "dev") gradeColor = "black";
    return <div className={"gradecolor" + gradeColor}>{authorNickname}</div>;
};
export default AuthorGradeModule;
