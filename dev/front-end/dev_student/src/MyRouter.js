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
    Logout,
    Todo,
    NotFound,
    SitesInfo,
} from "./pages";
import FooterModule from "module/FooterModule/FooterModule";
import HeaderComponent from "component/HeaderComponent/HeaderComponent";
import ScrollToTop from "module/ScrollToTop/ScrollToTop";
// import HeaderModule from "module/HeaderModule/HeaderModule";

const MyRouter = (props) => {
    const { logIn, logout, nickname } = props;
    return (
        <Router>
            <div id="rt">
                <HeaderComponent nickname={nickname} />
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
                            <Route path="/login" render={(props) => <Login logIn={logIn} {...props} />} />
                            <Route path="/logout" component={Logout} />

                            <AuthRoute path="/alarm" render={(props) => <Alarm {...props} />} />
                            <AuthRoute path="/newquestion" render={(props) => <NewQuestion {...props} />} />
                            <AuthRoute path="/mypage" render={(props) => <MyPage {...props} />} />
                            <Route path="/devnote" component={DevNote} />
                            <Route path="/sitesinfo/:infotype" component={SitesInfo} />
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
