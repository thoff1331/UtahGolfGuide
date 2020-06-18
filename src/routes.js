import React from "react";
import { Switch, Route } from "react-router-dom";
import statsPage from "./components/statsPage";
import landingPage from "./components/landingPage";


export default (
    <Switch>
        <Route exact path="/" component={landingPage} />
        <Route path="/stats" component={statsPage} />
    </Switch>
);