import React from "react";
import { Switch, Route } from "react-router-dom";
import statsPage from "./components/statsPage";
import landingPage from "./components/landingPage";
import careerStats from "./components/careerStats"


export default (
    <Switch>
        <Route exact path="/" component={landingPage} />
        <Route path="/stats" component={statsPage} />
        <Route path="/allstats" component={careerStats} />
    </Switch>
);