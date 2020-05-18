import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { findAllQuestions } from "query/queries";
import CircularProgress from "@material-ui/core/CircularProgress";
import ServerErrorPageTemplate from "page-template/ServerErrorPageTemplate/ServerErrorPageTemplate";

// page-templates
import HowToTemplate from "page-template/HowToTemplate/HowToTemplate";

// module-templates
import HowToListModuleTemplate from "module-template/HowToListModuleTemplate/HowToListModuleTemplate";
import HowToContentModuleTemplate from "module-template/HowToContentModuleTemplate/HowToContentModuleTemplate";

// module
import ScrollToTop from "module/ScrollToTop/ScrollToTop";

// atom

//Queires

import { POST, FIND_ALL_QUESTIONS } from "rest";

const HowTo = ({ location }) => {
    // const [questionData, setQuestionData] = useState();
    // const [questionCount, setQuestionCount] = useState();
    // const getQuestion = async () => {
    //     const data = await POST("post", FIND_ALL_QUESTIONS, { param: "date", pageNum: 1, requiredCount: 10 });
    //     setQuestionData(data);
    //     if (data) setQuestionCount(Object.keys(data).length);
    // };
    // useEffect(() => {
    //     getQuestion();
    // }, [1]);

    // const { loading, error, data } = useQuery(findAllQuestions, {
    //     variables: { param: "date" },
    //     fetchPolicy: "no-cache",
    // });

    // if (loading)
    //     return (
    //         <div>
    //             <CircularProgress disableShrink size={24} />
    //         </div>
    //     );
    // if (error) return <ServerErrorPageTemplate />;

    return (
        <HowToTemplate>
            <Router>
                <ScrollToTop>
                    <Switch>
                        <Route path="/howto/question/:id" component={HowToContentModuleTemplate} />

                        <Route
                            path="/howto"
                            render={() => (
                                <div>
                                    <HowToListModuleTemplate
                                        location={location}
                                        // questionAll={questionCount}
                                    ></HowToListModuleTemplate>
                                </div>
                            )}
                        />
                    </Switch>
                </ScrollToTop>
            </Router>
        </HowToTemplate>
    );
};

export default HowTo;
