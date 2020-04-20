import React from "react";
import Chips from "react-chips";
import { tagArray } from "array/arrays";

const TagInput = ({ tags, setTags }) => {
    const suggestions = tagArray;
    return (
        <div>
            <Chips value={tags} onChange={(chips) => setTags(chips)} suggestions={suggestions} />
        </div>
    );
};

export default TagInput;
