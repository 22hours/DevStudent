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
        // TAG별 조회
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
    // const { loading, error, data } = useQuery(findAllQuestionsPage, {
    //     variables: { param: param, requiredCount: 10, pageNum: pageNum },
    // });

    let pageCount = null;

    if (questionCount % 10 === 0) pageCount = questionCount / 10;
    else pageCount = Math.floor(questionCount / 10) + 1;

    // ======================
    // << Tag 별 필터 적용 >>
    // let filteredData = data.findAllQuestions;
    // if (nowTag) {
    //     filteredData = data.findAllQuestions.filter((item) => item.tags.includes(nowTag));
    // }
    // ======================

    // console.log(filteredData);
    // const questionList = (
    //     <div>
    //         {filteredData.map(({ _id, title, author, tags, date, content, answerCount, views, previews }) => (
    //             <HowToItem
    //                 id={_id}
    //                 key={_id}
    //                 author={author}
    //                 title={title}
    //                 answers={answerCount}
    //                 views={views}
    //                 date={date}
    //                 previews={previews}
    //                 tags={tags}
    //             ></HowToItem>
    //         ))}
    //     </div>
    // );

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
            {/* <div>{questionList}</div> */}
            <div>
                <DataProvider param={param} nowTag={nowTag} pageNum={pageNum} />
            </div>
            <Container className="margin-top-3 red-border" />
            <Container>
                <Pagination
                    className="howto-page-navigater"
                    count={pageCount}
                    variant="outlined"
                    page={pageNum}
                    onChange={handleChange}
                    shape="rounded"
                />
            </Container>
        </React.Fragment>
    );
};
export default HowToListTemplate;
