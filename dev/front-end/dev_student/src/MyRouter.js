import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
    DevNote,
    Alarm,
    EmailCheck,
    AuthRoute,
    NewQuestion,
    Register,
    HowTo,
    Home,
    Posts,
    About,
    Login,
    MyPage,
    Todo,
    NotFound,
} from "./pages";
import FooterModule from "module/FooterModule/FooterModule";
import HeaderComponent from "component/HeaderComponent/HeaderComponent";
import ScrollToTop from "module/ScrollToTop/ScrollToTop";
// import HeaderModule from "module/HeaderModule/HeaderModule";

const MyRouter = (props) => {
    const { saveLoginState, user, authenticated } = props;
    return (
        <Router>
            <div id="rt">
                <HeaderComponent user={user} authenticated={authenticated} />
                <div className="Article">
                    <ScrollToTop>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about/:user" component={About} />
                            <Route path="/posts" component={Posts} />
                            <Route path="/todolist" component={Todo} />
                            <Route path="/howto" component={HowTo} />
                            <Route path="/emailCheck/:rand" component={EmailCheck} />
                            <Route path="/register" component={Register} />
                            <Route
                                path="/login"
                                render={(props) => (
                                    <Login authenticated={authenticated} saveLoginState={saveLoginState} {...props} />
                                )}
                            />
                            <AuthRoute
                                authenticated={authenticated}
                                path="/alarm"
                                render={(props) => <Alarm user={user} {...props} />}
                            />
                            <AuthRoute
                                authenticated={authenticated}
                                path="/newquestion"
                                render={(props) => <NewQuestion user={user} {...props} />}
                            />
                            <AuthRoute
                                authenticated={authenticated}
                                path="/mypage"
                                render={(props) => <MyPage user={user} {...props} />}
                            />
                            <Route path="/devnote" component={DevNote} />

                            <Route component={NotFound} />
                        </Switch>
                    </ScrollToTop>
                </div>
                <FooterModule />
            </div>
        </Router>
    );
};

export default MyRouter;
