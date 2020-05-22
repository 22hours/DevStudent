import React, { useState, useEffect } from "react";
import "./QuestionTagModuleTemplate.css";

import { tagArray } from "array/arrays";
import ServerError from "pages/ServerError";

// items
import QuestionTagItem from "item/QuestionTagItem/QuestionTagItem";

//icons
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import CircularProgress from "@material-ui/core/CircularProgress";

// Queries
import { POST, COUNT_TAGS } from "rest";

const QuestionTagModuleTemplate = () => {
    const [tagData, setTagData] = useState();
    const [tagList, setTagList] = useState();
    const getTagData = async () => {
        const data = await POST("post", COUNT_TAGS, { requiredCount: 10, tags: tagArray });
        setTagData(data);
        if (data)
            setTagList(
                data.map(({ name, count }) => <QuestionTagItem name={name} count={count} key={name}></QuestionTagItem>)
            );
    };
    useEffect(() => {
        getTagData();
    }, [1]);

    return (
        <div className="sidebar-item-wrapper">
            <div className="question-tag-header-wrapper">
                <div className="item-header">
                    태그 <LocalOfferIcon style={{ fontSize: "14px" }} />
                </div>
            </div>
            <div className="item-list-wrapper">
                <div>{tagList}</div>
            </div>
        </div>
    );
};
export default QuestionTagModuleTemplate;
