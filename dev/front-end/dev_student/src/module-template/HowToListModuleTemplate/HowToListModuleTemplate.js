import React, { useState } from "react";
import { Container } from "reactstrap";
import { useQuery } from "@apollo/react-hooks";
import { FIND_QUESTIONS_BY_TAG, findAllQuestionsPage, FIND_QUESTIONS_BY_OPTION } from "query/queries";
import CircularProgress from "@material-ui/core/CircularProgress";
import ServerError from "pages/ServerError";

// modules
import PageHeaderModule from "module/PageHeaderModule/PageHeaderModule";
import PageNavigation from "module/PageNavigtion/PageNavigation";

// items
import HowToBoxItem from "item/HowToBoxItem/HowToBoxItem";

// utils
import { timeForToday } from "util/time";

const TagProvider = ({ param, nowTag, pageNum, setQuestionCount }) => {
    const { loading, error, data } = useQuery(FIND_QUESTIONS_BY_TAG, {
        variables: { param: param, requiredCount: 10, pageNum: pageNum, tags: nowTag, logical: "or" },
    });
    if (loading)
        return (
            <div>
                <CircularProgress />
            </div>
        );
    if (error) return <p>Error!</p>;

    setQuestionCount(Object.keys(data.findQuestionsByTags).length);

    return data.findQuestionsByTags.map(
        ({ _id, title, author, tags, date, content, answerCount, views, previews, adoptedAnswerId, likesCount }) => (
            <HowToBoxItem
                id={_id}
                key={_id}
                authorNickname={author.nickname}
                authorPoint={author.point}
                authorGrade={author.grade}
                title={title}
                answers={answerCount}
                views={views}
                date={date}
                dateToText={timeForToday(date)}
                previews={previews}
                tags={tags}
                likesCount={likesCount}
                adoptedAnswerId={adoptedAnswerId}
            ></HowToBoxItem>
        )
    );
};

const NonTagProvider = ({ param, nowTag, pageNum, setQuestionCount, questionAll }) => {
    const { loading, error, data } = useQuery(findAllQuestionsPage, {
        variables: { param: param, requiredCount: 10, pageNum: pageNum },
    });
    if (loading)
        return (
            <div>
                <CircularProgress />
            </div>
        );
    if (error) return <p>Error!</p>;

    setQuestionCount(questionAll);

    if (data === null) {
        alert("Error!");
        if (error) return <p>Error!</p>;
    }
    return data.findAllQuestions.map(
        ({ _id, title, author, tags, date, content, answerCount, views, previews, adoptedAnswerId, likesCount }) => (
            <HowToBoxItem
                id={_id}
                key={_id}
                authorNickname={author.nickname}
                authorPoint={author.point}
                authorGrade={author.grade}
                title={title}
                answers={answerCount}
                views={views}
                date={date}
                dateToText={timeForToday(date)}
                likesCount={likesCount}
                previews={previews}
                tags={tags}
                adoptedAnswerId={adoptedAnswerId}
            ></HowToBoxItem>
        )
    );
};

const SearchProvider = ({ param, nowSearch, pageNum, setQuestionCount }) => {
    nowSearch = decodeURI(nowSearch);
    const { loading, error, data } = useQuery(FIND_QUESTIONS_BY_OPTION, {
        variables: { param: "date", requiredCount: 10, pageNum: pageNum, option: "content", searchContent: nowSearch },
    });
    if (loading)
        return (
            <div>
                <CircularProgress />
            </div>
        );
    if (error) return <p>Error!</p>;

    setQuestionCount(Object.keys(data.findQuestionsByOption).length);

    return data.findQuestionsByOption.map(
        ({ _id, title, author, tags, date, content, answerCount, views, previews, adoptedAnswerId, likesCount }) => (
            <HowToBoxItem
                id={_id}
                key={_id}
                authorNickname={author.nickname}
                authorPoint={author.point}
                authorGrade={author.grade}
                title={title}
                answers={answerCount}
                views={views}
                date={date}
                dateToText={timeForToday(date)}
                previews={previews}
                tags={tags}
                likesCount={likesCount}
                adoptedAnswerId={adoptedAnswerId}
            ></HowToBoxItem>
        )
    );
};

const DataProvider = ({ param, nowTag, pageNum, setQuestionCount, questionCount, questionAll, nowSearch }) => {
    if (nowSearch) {
        return (
            <SearchProvider
                param={param}
                nowSearch={nowSearch}
                pageNum={pageNum}
                setQuestionCount={setQuestionCount}
                questionCount={questionCount}
            />
        );
    } else {
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
    }
};

const HowToListTemplate = ({ tags, location, questionAll }) => {
    const [param, setParam] = useState("date");
    const [nowTag, setNowTag] = useState(location.search.split("tags=")[1]);
    const [nowSearch, setSearch] = useState(location.search.split("search=")[1]);
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
                    nowSearch={nowSearch}
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
