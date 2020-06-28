import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { headerStyles } from "./headerStyles";
import courseList from './courseData.json'
import { Link, HashRouter } from "react-router-dom";
import StatsPage from './statsPage'

class Header extends Component {
    constructor() {
        super()
    }
    render() {
        const { classes } = this.props
        return (
            <div className={classes.header}>
                <h3>Welcome To The Utah Golf Guide</h3>
                <HashRouter>
                    <Link className={classes.links} to="/stats">My Stats</Link>
                </HashRouter>
                <h6> {courseList.length} Courses Available to You </h6>

            </div>
        )
    }
}

export default withStyles(headerStyles)(Header)