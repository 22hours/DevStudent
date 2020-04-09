import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import HowToListHeaderTemplate from "../HowToListHeaderTemplate/HowToListHeaderTemplate";
import Pagination from "@material-ui/lab/Pagination";
import { useQuery } from "@apollo/react-hooks";
import HowToItem from "../HowToItem/HowToItem";
import { findAllQuestionsPage } from "../../../query/queries";

const HowToListTemplate = ({ tags, questionCount, location }) => {
    const [param, setParam] = useState("date");
    const [requiredCount] = useState(10);
    const [nowTag, setNowTag] = useState(location.search.split("=")[1]);
    const [pageNum, setPage] = useState(1);
    const handleTagClick = (value) => {
        setNowTag(value);
    };
    const handleChange = (event, value) => {
        setPage(value);
    };
    const { loading, error, data } = useQuery(findAllQuestionsPage, {
        variables: { param: param, requiredCount: requiredCount, pageNum: pageNum },
    });

    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error!</p>;

    let pageCount = null;

    if (questionCount % 10 === 0) pageCount = questionCount / 10;
    else pageCount = Math.floor(questionCount / 10) + 1;

    // ======================
    // << Tag 별 필터 적용 >>
    let filteredData = data.findAllQuestions;
    if (nowTag) {
        filteredData = data.findAllQuestions.filter((item) => item.tags.includes(nowTag));
    }
    // ======================

    console.log(filteredData);
    const questionList = (
        <div>
            {filteredData.map(({ _id, title, author, tags, date, content, answerCount, views, previews }) => (
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
            ))}
        </div>
    );

    return (
        <React.Fragment>
            <Container className="margin-top-3 red-border">
                <HowToListHeaderTemplate
                    setParam={setParam}
                    param={param}
                    tags={tags}
                    question_count={questionCount}
                ></HowToListHeaderTemplate>
            </Container>
            <div>{questionList}</div>
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
