import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { findAllQuestions } from "query/queries";

// page-templates
import HowToTemplate from "page-template/HowToTemplate/HowToTemplate";

// module-templates
import HowToListModuleTemplate from "module-template/HowToListModuleTemplate/HowToListModuleTemplate";
import HowToContentModuleTemplate from "module-template/HowToContentModuleTemplate/HowToContentModuleTemplate";

// module
import ScrollToTop from "module/ScrollToTop/ScrollToTop";
// atom

const HowTo = ({ location }) => {
    useEffect(() => {
        console.log("haha");
    }, [location]);
    const [tag, setTag] = useState([
        { idx: 0, tagname: "JavaScript", tagcount: "500" },
        { idx: 1, tagname: ".Net", tagcount: "100" },
        { idx: 2, tagname: "C++", tagcount: "400" },
        { idx: 3, tagname: "Android", tagcount: "300" },
        { idx: 4, tagname: "Html", tagcount: "200" },
    ]);

    const { loading, error, data } = useQuery(findAllQuestions, {
        variables: { param: "date" },
    });

    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error!</p>;

    const questionAll = Object.keys(data.findAllQuestions).length;

    return (
        <HowToTemplate tag={tag}>
            <Router>
                <ScrollToTop>
                    <Switch>
                        <Route
                            exact
                            path="/howto"
                            render={() => (
                                <div>
                                    <HowToListModuleTemplate
                                        location={location}
                                        questionAll={questionAll}
                                    ></HowToListModuleTemplate>
                                </div>
                            )}
                        />
                        <Route path="/howto/question/:id" component={HowToContentModuleTemplate} />
                    </Switch>
                </ScrollToTop>
            </Router>
        </HowToTemplate>
    );
};

export default HowTo;
