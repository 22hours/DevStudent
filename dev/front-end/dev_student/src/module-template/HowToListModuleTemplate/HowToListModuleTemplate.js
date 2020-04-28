import React, { useState } from "react";
import { Container } from "reactstrap";
import { useQuery } from "@apollo/react-hooks";
import { FIND_QUESTIONS_BY_TAG, findAllQuestionsPage } from "query/queries";

// modules
import PageHeaderModule from "module/PageHeaderModule/PageHeaderModule";
import PageNavigation from "module/PageNavigtion/PageNavigation";

// items
import HowToBoxItem from "item/HowToBoxItem/HowToBoxItem";

const TagProvider = ({ param, nowTag, pageNum, setQuestionCount }) => {
    const { loading, error, data } = useQuery(FIND_QUESTIONS_BY_TAG, {
        variables: { param: param, requiredCount: 10, pageNum: pageNum, tags: nowTag, logical: "or" },
    });
    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error!</p>;

    setQuestionCount(Object.keys(data.findQuestionsByTags).length);

    return data.findQuestionsByTags.map(
        ({ _id, title, author, tags, date, content, answerCount, views, previews, adoptedAnswerId }) => (
            <HowToBoxItem
                id={_id}
                key={_id}
                author={author}
                title={title}
                answers={answerCount}
                views={views}
                date={date}
                previews={previews}
                tags={tags}
                adoptedAnswerId={adoptedAnswerId}
            ></HowToBoxItem>
        )
    );
};

const NonTagProvider = ({ param, nowTag, pageNum, setQuestionCount, questionAll }) => {
    const { loading, error, data } = useQuery(findAllQuestionsPage, {
        variables: { param: param, requiredCount: 10, pageNum: pageNum },
    });
    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error!</p>;
    console.log(data);

    setQuestionCount(questionAll);

    if (data === null) {
        alert("Error!");
        return <p>Error!</p>;
    }
    return data.findAllQuestions.map(
        ({ _id, title, author, tags, date, content, answerCount, views, previews, adoptedAnswerId }) => (
            <HowToBoxItem
                id={_id}
                key={_id}
                author={author}
                title={title}
                answers={answerCount}
                views={views}
                date={date}
                previews={previews}
                tags={tags}
                adoptedAnswerId={adoptedAnswerId}
            ></HowToBoxItem>
        )
    );
};

const DataProvider = ({ param, nowTag, pageNum, setQuestionCount, questionCount, questionAll }) => {
    if (nowTag) {
        return (
            <TagProvider
                param={param}
                nowTag={nowTag}
                pageNum={pageNum}
                setQuestionCount={setQuestionCount}
                questionCount={questionCount}
            />
        );
    } else {
        return (
            <NonTagProvider
                param={param}
                nowTag={nowTag}
                pageNum={pageNum}
                setQuestionCount={setQuestionCount}
                questionCount={questionCount}
                questionAll={questionAll}
            />
        );
    }
};

const HowToListTemplate = ({ tags, location, questionAll }) => {
    const [param, setParam] = useState("date");
    const [nowTag, setNowTag] = useState(location.search.split("=")[1]);
    const [pageNum, setPage] = useState(1);
    const [questionCount, setQuestionCount] = useState(questionAll);

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <React.Fragment>
            <PageHeaderModule
                setParam={setParam}
                param={param}
                tags={tags}
                question_count={questionCount}
            ></PageHeaderModule>
            <div>
                <DataProvider
                    param={param}
                    nowTag={nowTag}
                    pageNum={pageNum}
                    questionCount={questionCount}
                    setQuestionCount={setQuestionCount}
                    questionAll={questionAll}
                />
            </div>
            <Container className="margin-top-3 red-border" />
            <div className="howto-page-navigater">
                <PageNavigation questionCount={questionCount} handleChange={handleChange} pageNum={pageNum} />
            </div>
        </React.Fragment>
    );
};
export default HowToListTemplate;
