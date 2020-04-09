import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HowToListTemplate from "../components/HowTo/HowToListTemplate/HowToListTemplate";
import HowToContent from "../components/HowTo/HowToContent/HowToContent";
import { useQuery } from "@apollo/react-hooks";
import { findAllQuestions } from "../query/queries";
import { Container, Row, Col } from "reactstrap";
import HowToSidebarTemplate from "../components/HowToSidebar/HowToSidebarTemplate/HowToSidebarTemplate";

const HowTo = ({ location }) => {
    const [tag, setTag] = useState([
        { idx: 0, tagname: "JavaScript", tagcount: "500" },
        { idx: 1, tagname: ".NetFramework", tagcount: "100" },
        { idx: 2, tagname: "C++", tagcount: "400" },
        { idx: 3, tagname: "Android", tagcount: "300" },
        { idx: 4, tagname: "Html", tagcount: "200" },
    ]);

    const { loading, error, data } = useQuery(findAllQuestions, {
        variables: { param: "date" },
    });

    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error!</p>;

    const questionCount = Object.keys(data.findAllQuestions).length;

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col md={9} className="howto-wrapper">
                        <Router>
                            <Switch>
                                <Route
                                    exact
                                    path="/howto"
                                    render={() => (
                                        <div>
                                            <HowToListTemplate
                                                location={location}
                                                questionCount={questionCount}
                                            ></HowToListTemplate>
                                        </div>
                                    )}
                                />

                                <Route path="/howto/question/:id" component={HowToContent} />
                            </Switch>
                        </Router>
                    </Col>
                    <Col md={3}>
                        <HowToSidebarTemplate tag={tag}></HowToSidebarTemplate>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default HowTo;
