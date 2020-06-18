import React, { PureComponent } from 'react'
import { withStyles } from "@material-ui/styles"
import { landingPageStyles } from "./landingPageStyles"
import CourseCard from "./courseCard"
import { ArrowForwardIos, CropSquareSharp } from "@material-ui/icons";
import { ArrowBackIos } from "@material-ui/icons";
import PageDisplay from './pageDisplay'
import NamesContainer from './courseContainer';
import courseList from './courseData.json';
import Header from './header'
import './pageDisplay.scss'
import styled from "styled-components"
import { Paper } from "@material-ui/core";
import sortOptions from "./filterData.json";
import NoCourseFound from './noCoursesFound'
import axios from 'axios';

import './landingPage.scss'


export const StyledPaper = styled(Paper)`
background-color: green;
width:600px;
height: 600px;
display: flex;
flex-direction: row;
margin: 15px;
flex: 0 0 auto;
border-radius: 8px;
justify-content: center;
color: white;
border: 4px solid yellow;

`

const Content = styled.div`
display: flex,
flex-direction: column;
justify-content: center;
align-items: center;`

const courseNames = courseList.map((course) => {
    return course.name
})
const sortedData = courseList.sort(function (a, b) { return a.rate - b.rate })
const sortedCourse = courseList.sort()
const priceSort = courseList.sort(function (a, b) {
    if (a.rate < b.rate) {
        return -1;
    }
    if (b.rate > a.rate) {
        return 1;
    }
    return 0;
})
const nameSort = courseList.sort(function (a, b) { return a.rate - b.rate })
const sortByName = courseList.sort(function (a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (b.name > a.name) {
        return 1;
    }
    return 0;
})

class LandingPage extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

            names: courseNames,
            pageCount: 1,
            pageLength: 12,
            searchTerm: '',
            options: sortOptions,
            sort: '',
            empty: false,
            stats: []

        }
    }
    componentDidMount() {
        axios.get("/api/stats").then(res => {
            this.setState({
                stats: res.data
            });
        });
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
    clearSearch = () => {
        this.setState({
            searchTerm: ''
        })
    }
    editSearchTerm = (e) => {
        this.setState({ searchTerm: e.target.value })
    }

    dynamicSearch = () => {
        return this.state.names.filter(name => name.includes(this.state.searchTerm))

    }
    render() {
        console.log(this.state)
        const { classes } = this.props
        let pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
        const pageNumbers = pages.map((num) => {
            return (
                <h4 className={num === this.state.pageCount ? 'highlightedPage' : 'numbers'} onClick={() => this.setPage(num)}>{num}</h4>
            )
        })
        const defaultSort = (this.state.sort === '' ? "A-Z" : this.state.sort)
        const { options, sort, names } = this.state
        const golfPassSortData = courseList.map((course) => {
            if (course.golfPass === true && course.page === this.state.pageCount) {
                return (<StyledPaper>
                    <div className={classes.cardContent}>
                        <h1>{course.name}.toUpperCase()</h1>
                        <h3>Phone:{course.phone}</h3>
                        <h3>{course.pgaPro}</h3>
                        <h4>{course.Address}</h4>
                        <h4>{course.golfPass ? <img src='data:image/png;base64,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' /> : null}</h4>
                        <a href={course.url} target="_blank">Tee Times</a>
                    </div>
                </StyledPaper>
                )
            }
        })
        const priceSortData = priceSort.map((course) => {
            if (course.page === this.state.pageCount) {
                return (<StyledPaper>
                    <div className={classes.cardContent}>
                        <h1>{course.name}</h1>
                        <h2>Phone:{course.phone}</h2>
                        <h2>{course.pgaPro}</h2>
                        <h4>{course.Address}</h4>
                        <h2>18 Hole Rate: ${course.rate}</h2>
                        <h4>{course.golfPass ? <img src='data:image/png;base64,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' /> : null}</h4>
                        <a href={course.url} target="_blank">Tee Times</a>

                    </div>
                </StyledPaper>
                )

            }
        })

        const filteredCardData = courseList.map((course) => {
            if (course.name.includes(this.state.searchTerm)) {
                return (<StyledPaper>
                    <div className={classes.cardContent}>
                        <h1>{course.name}</h1>
                        <h3>Phone:{course.phone}</h3>
                        <h3>{course.pgaPro}</h3>
                        <h4>{course.Address}</h4>
                        <h4>{course.golfPass ? <img src='data:image/png;base64,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' /> : null}</h4>
                        <a href={course.url} target='_blank'>Tee Times</a>

                    </div>
                </StyledPaper>
                )
            }
        })

        const cardData = sortByName.map((course) => {
            if (course.page === this.state.pageCount && this.state.sort === '') {
                return (
                    <StyledPaper>
                        <div className={classes.cardContent}>
                            <h1>{course.name}</h1>
                            <h3>Phone:{course.phone}</h3>
                            <h3>{course.pgaPro}</h3>
                            <h4>{course.Address}</h4>
                            <h4>{course.golfPass ? <img src='data:image/png;base64,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' /> : null}</h4>
                            <a href={course.url} target='_blank'>Tee Times</a>

                        </div>
                    </StyledPaper>
                )

            }
        })
        const notEmpty = (ele) => ele.page === this.state.pageCount
        const itemsOnPage = courseList.some(notEmpty)
        console.log(itemsOnPage)
        return (
            <div className={classes.lpText} >
                <Header />
                <div className={classes.landingPageContainer}>
                    <div className={classes.searchBox}>
                        <input value={this.state.searchTerm
                        } onChange={this.editSearchTerm} placeholder='Search By Course!' /><button className={classes.clearSearch} onClick={this.clearSearch}>Clear Search</button>
                        <br></br>
                        {this.state.searchTerm === '' ? null : <h1 className={classes.searchResults}><NamesContainer names={this.dynamicSearch().sort()} /></h1>}
                    </div>

                </div>

                <div className={classes.cards}>
                    {this.state.searchTerm === '' ? cardData : filteredCardData}
                    {itemsOnPage ? null : <NoCourseFound />}
                </div>
                <div className={classes.pageControls}>
                    <p className={classes.pageCount}><button onClick={this.prevPage}><ArrowBackIos /></button>{pageNumbers}<button onClick={this.nextPage}><ArrowForwardIos /></button></p>

                </div>
            </div >
        )
    }
}

export default withStyles(landingPageStyles)(LandingPage)

