import React from "react";
import Chips from "react-chips";
const TagInput = ({ tags, setTags }) => {
    const suggestions = [
        "Java",
        "Javascript",
        "React.js",
        "Spring",
        "C#",
        "C++",
        "WPF",
        "WinForm",
        "C",
        "Python",
        "Node.js",
        "MySQL",
        "Firebase",
    ];
    return (
        <div>
            <Chips value={tags} onChange={(chips) => setTags(chips)} suggestions={suggestions} />
        </div>
    );
};

export default TagInput;
