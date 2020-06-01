import React, { Component } from 'react';
import { ArrowForwardIos } from "@material-ui/icons";
import { ArrowBackIos } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles"
import { PageDisplayStyles, pageDisplayStyles } from "./pageDisplayStyles";
import courses from "./courseData.json";
import LandingPage from './landingPage';
import { connect } from "react-redux"
import { pageBack, pageForward } from "../store";
import "./pageDisplay.scss"
class PageDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageCount: 1,
            pageLength: 7
        }
    }
    componentDidMount() {

    }
    setPage = (num) => {
        this.setState({
            pageCount: num
        })
    }
    prevPage = () => {
        if (this.state.pageCount === 1) {
            this.setState({
                pageCount: this.state.pageLength
            })
        } else {
            this.setState({
                pageCount: this.state.pageCount - 1
            })
        }
    }
    nextPage = () => {
        if (this.state.pageCount === this.state.pageLength) {
            this.setState({
                pageCount: 1
            })
        } else {
            this.setState({
                pageCount: this.state.pageCount + 1
            })
        }
    }
    render() {
        let pages = [1, 2, 3, 4, 5, 6, 7]
        console.log(this.state)
        const { classes } = this.props
        const props = this.state.pageCount
        console.log(this.props)
        const { pageCount, pageLength } = this.state
        const pageNumbers = pages.map((num) => {
            return (
                <h4 className={num === this.state.pageCount ? 'highlightedPage' : 'numbers'} onClick={() => this.setPage(num)}>{num}</h4>
            )
        })
        return (
            <div className={classes.pageControls}>
                <p className={classes.pageCount}><button onClick={this.prevPage}><ArrowBackIos /></button>{pageNumbers}<button onClick={this.nextPage}><ArrowForwardIos /></button></p>


            </div>
        );
    }
}

export default withStyles(pageDisplayStyles)(PageDisplay)