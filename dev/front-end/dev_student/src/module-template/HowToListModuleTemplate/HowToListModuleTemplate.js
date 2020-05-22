import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";

import ServerError from "pages/ServerError";

// modules
import NowLoading from "module/NowLoading/NowLoading";

import PageHeaderModule from "module/PageHeaderModule/PageHeaderModule";
import PageNavigation from "module/PageNavigtion/PageNavigation";

// items
import HowToBoxItem from "item/HowToBoxItem/HowToBoxItem";

// utils
import { timeForToday } from "util/time";

//Queries

import { POST, FIND_QUESTIONS_BY_TAGS, FIND_ALL_QUESTIONS, FIND_QUESTIONS_BY_OPTIONS, COUNT_ALL_QUESTIONS } from "rest";

const TagProvider = ({ param, nowTag, pageNum, setQuestionCount }) => {
    const [tagData, setTagData] = useState();

    const getTagsData = async () => {
        const data = await POST("post", FIND_QUESTIONS_BY_TAGS, {
            param: param,
            requiredCount: 10,
            pageNum: pageNum,
            tags: new Array(nowTag),
            logical: "or",
        });
        setTagData(data);
        if (data) setQuestionCount(Object.keys(data).length);
    };
    useEffect(() => {
        getTagsData();
    }, [pageNum]);

    if (tagData) {
        return tagData?.map(
            ({
                _id,
                title,
                author,
                tags,
                date,
                content,
                answerCount,
                views,
                previews,
                adoptedAnswerId,
                likesCount,
            }) => (
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
    } else {
        return <NowLoading />;
    }
};

const NonTagProvider = ({ param, nowTag, pageNum, setQuestionCount }) => {
    const [nonTagData, setNonTagData] = useState();
    const getNonTagData = async () => {
        const data = await POST("post", FIND_ALL_QUESTIONS, { param: param, requiredCount: 10, pageNum: pageNum });
        setNonTagData(data);
    };
    useEffect(() => {
        getNonTagData();
    });

    const getQuestionCount = async () => {
        const data = await POST("post", COUNT_ALL_QUESTIONS);
        setQuestionCount(data?.count);
    };
    useEffect(() => {
        getQuestionCount();
    });

    if (nonTagData) {
        return nonTagData.map(
            ({
                _id,
                title,
                author,
                tags,
                date,
                content,
                answerCount,
                views,
                previews,
                adoptedAnswerId,
                likesCount,
            }) => (
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
    } else {
        return <NowLoading />;
    }
};

const SearchProvider = ({ param, nowSearch, pageNum, setQuestionCount }) => {
    nowSearch = decodeURI(nowSearch);
    const [searchData, setSearchData] = useState();
    const getSerachData = async () => {
        const data = await POST("post", FIND_QUESTIONS_BY_OPTIONS, {
            param: "date",
            requiredCount: 10,
            pageNum: pageNum,
            option: "content",
            searchContent: nowSearch,
        });
        setSearchData(data);
        if (data) setQuestionCount(Object.keys(data).length);
    };
    useEffect(() => {
        getSerachData();
    }, [1]);

    if (searchData) {
        return searchData.map(
            ({
                _id,
                title,
                author,
                tags,
                date,
                content,
                answerCount,
                views,
                previews,
                adoptedAnswerId,
                likesCount,
            }) => (
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
    } else {
        return <NowLoading />;
    }
};

const DataProvider = ({ param, nowTag, pageNum, setQuestionCount, questionCount, nowSearch }) => {
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
                />
            );
        }
    }
};

const HowToListTemplate = ({ tags, location }) => {
    const [param, setParam] = useState("date");
    const [nowTag, setNowTag] = useState(location.search.split("tags=")[1]);
    const [nowSearch, setSearch] = useState(location.search.split("search=")[1]);
    const [pageNum, setPageNum] = useState(1);
    const [questionCount, setQuestionCount] = useState();

    const handleChange = (event, value) => {
        setPageNum(value);
        window.scrollTo(0, 0);
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
