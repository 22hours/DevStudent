import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { setAuthInfo, getAuthInfo } from "auth";

function AuthRoute({ authenticated, component: Component, render, ...rest }) {
    const { auth } = getAuthInfo();
    console.log(auth);
    // const auth = window.localStorage.getItem("auth");
    return (
        <Route
            {...rest}
            render={(props) =>
                auth ? (
                    render ? (
                        render(props)
                    ) : (
                        <Component {...props} />
                    )
                ) : (
                    <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
                )
            }
        />
    );
}

export default AuthRoute;
