import React from "react";
// 配置路由规则
import { Router, Route, NavLink, Switch, Redirect } from "dva/router";
import Home from "../components/Home.js";
import Signin from "../components/Signin.js";

console.log("this is routers");

let fn = function ({ history, app }) {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/signin" exact component={Signin} />
            </Switch>
        </Router>
    );
};

export default fn;
