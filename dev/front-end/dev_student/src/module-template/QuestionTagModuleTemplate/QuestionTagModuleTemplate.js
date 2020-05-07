import React from "react";
import "./QuestionTagModuleTemplate.css";
import { COUNT_TAGS } from "query/queries";
import { useQuery } from "@apollo/react-hooks";
import { tagArray } from "array/arrays";
import ServerError from "pages/ServerError";

// items
import QuestionTagItem from "item/QuestionTagItem/QuestionTagItem";

//icons
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import CircularProgress from "@material-ui/core/CircularProgress";

const QuestionTagModuleTemplate = () => {
    const { loading, error, data } = useQuery(COUNT_TAGS, {
        variables: { requiredCount: 10, tags: tagArray },
    });
    if (loading)
        return (
            <div>
                <CircularProgress />
            </div>
        );
    if (error) return <ServerError />;
    const taglist = data.countTags.map(({ name, count }) => (
        <QuestionTagItem name={name} count={count} key={name}></QuestionTagItem>
    ));
    return (
        <div className="question-tag-wrapper">
            <div className="question-tag-header-wrapper">
                <div className="question-tag-header">
                    태그 <LocalOfferIcon style={{ fontSize: "14px" }} />
                </div>{" "}
            </div>
            <div className="question-tag-list-wrapper">
                <div>{taglist}</div>
            </div>
        </div>
    );
};
export default QuestionTagModuleTemplate;
