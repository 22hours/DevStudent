import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { findAllQuestions } from "query/queries";

// page-templates
import HowToTemplate from "page-template/HowToTemplate/HowToTemplate";

// module-templates
import HowToListModuleTemplate from "module-template/HowToListModuleTemplate/HowToListModuleTemplate";
import HowToContentModuleTemplate from "module-template/HowToContentModuleTemplate/HowToContentModuleTemplate";

// module

// atom

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
        <HowToTemplate tag={tag}>
            <Router>
                <Switch>
                    <Route
                        exact
                        path="/howto"
                        render={() => (
                            <div>
                                <HowToListModuleTemplate
                                    location={location}
                                    questionCount={questionCount}
                                ></HowToListModuleTemplate>
                            </div>
                        )}
                    />
                    <Route path="/howto/question/:id" component={HowToContentModuleTemplate} />
                </Switch>
            </Router>
        </HowToTemplate>
    );
};

export default HowTo;
