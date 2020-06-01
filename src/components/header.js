import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { headerStyles } from "./headerStyles";
import courses from './courseData.json'

class Header extends Component {
    constructor() {
        super()
    }
    render() {
        const { classes } = this.props
        return (
            <div className={classes.header}>
                <h1>Welcome To The Utah Golf Guide</h1>
                <h5> {courses.courses.length} Courses Available to You </h5>
            </div>
        )
    }
}

export default withStyles(headerStyles)(Header)