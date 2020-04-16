import React, { useState } from "react";
import { Container } from "reactstrap";
import Pagination from "@material-ui/lab/Pagination";
import { useQuery } from "@apollo/react-hooks";
import { FIND_QUESTIONS_BY_TAG, findAllQuestionsPage } from "../../query/queries";

// modules
import PageHeaderModule from "module/PageHeaderModule/PageHeaderModule";

// items
import HowToItem from "item/HowToItem/HowToItem";

const TagProvider = ({ param, nowTag, pageNum }) => {
    const { loading, error, data } = useQuery(FIND_QUESTIONS_BY_TAG, {
        variables: { param: param, requiredCount: 10, pageNum: pageNum, tags: nowTag, logical: "or" },
    });
    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error!</p>;

    return data.findQuestionsByTags.map(({ _id, title, author, tags, date, content, answerCount, views, previews }) => (
        <HowToItem
            id={_id}
            key={_id}
            author={author}
            title={title}
            answers={answerCount}
            views={views}
            date={date}
            previews={previews}
            tags={tags}
        ></HowToItem>
    ));
};

const NonTagProvider = ({ param, nowTag, pageNum }) => {
    const { loading, error, data } = useQuery(findAllQuestionsPage, {
        variables: { param: param, requiredCount: 10, pageNum: pageNum },
    });
    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error!</p>;

    return data.findAllQuestions.map(({ _id, title, author, tags, date, content, answerCount, views, previews }) => (
        <HowToItem
            id={_id}
            key={_id}
            author={author}
            title={title}
            answers={answerCount}
            views={views}
            date={date}
            previews={previews}
            tags={tags}
        ></HowToItem>
    ));
};

const DataProvider = ({ param, nowTag, pageNum }) => {
    if (nowTag) {
        return <TagProvider param={param} nowTag={nowTag} pageNum={pageNum} />;
    } else {
        return <NonTagProvider param={param} nowTag={nowTag} pageNum={pageNum} />;
    }
};

const HowToListTemplate = ({ tags, questionCount, location }) => {
    const [param, setParam] = useState("date");
    const [nowTag, setNowTag] = useState(location.search.split("=")[1]);
    const [pageNum, setPage] = useState(1);
    const handleTagClick = (value) => {
        setNowTag(value);
    };
    const handleChange = (event, value) => {
        setPage(value);
    };
    const navigation_style = {
        paddinLeft: "0px",
        marginBottom: "18px",
    };
    let pageCount = null;

    if (questionCount % 10 === 0) pageCount = questionCount / 10;
    else pageCount = Math.floor(questionCount / 10) + 1;

    return (
        <React.Fragment>
            <Container className="margin-top-3 red-border">
                <PageHeaderModule
                    setParam={setParam}
                    param={param}
                    tags={tags}
                    question_count={questionCount}
                ></PageHeaderModule>
            </Container>
            <div>
                <DataProvider param={param} nowTag={nowTag} pageNum={pageNum} />
            </div>
            <Container className="margin-top-3 red-border" />
            <div className="howto-page-navigater">
                <Pagination
                    style={navigation_style}
                    count={pageCount}
                    variant="outlined"
                    page={pageNum}
                    onChange={handleChange}
                    shape="rounded"
                />
            </div>
        </React.Fragment>
    );
};
export default HowToListTemplate;
