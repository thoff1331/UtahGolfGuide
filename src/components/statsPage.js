import React, { Component } from 'react';
import { withStyles, Button } from "@material-ui/core";
import { statPageStyles } from "./statPageStyles";
import { Link, HashRouter } from "react-router-dom";
import DatePicker from "react-datepicker";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

class StatsPage extends Component {
    constructor() {
        super();
        this.state = {
            stats: [],
            newRound: false,
            startDate: new Date()
        }
    }
    componentDidMount() {
        let that = this;
        fetch('/api/stats').then(function (response) {
            response.json().then(function (data) {
                that.setState({
                    stats: data
                })
            })
        })
    }
    newScoreButton = () => {
        this.setState({
            newRound: true
        })
    }
    handleChange = date => {
        this.setState({
            startDate: date
        });
    };
    backToStatsButton = () => {
        window.location.reload()
    }

    addScore = (e) => {
        var that = this
        e.preventDefault()
        let statsData = {
            date: this.state.startDate,
            course: this.refs.course.value,
            score: this.refs.score.value,
            relation: this.refs.relation.value,
            fairways: this.refs.fairways.value,
            greens: this.refs.greens.value,
            putts: this.refs.putts.value,
        }
        let request = new Request('/api/new-round', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(statsData)
        });
        let stats = that.state.stats;
        console.log(stats)
        stats.push(statsData)
        console.log(stats)
        that.setState({
            stats: stats,

        })
        fetch(request).then(function (response) {
            response.json().then(function (data) {

            }).then(this.setState({
                newRound: false
            }))
        }).catch(function (err) {
            console.log(err)
        })
    }
    render() {
        let stats = this.state.stats
        const { classes } = this.props
        console.log(this.state)
        if (this.state.newRound === false) {
            return (
                <div>
                    <div className={classes.header}>
                        <h1>Your Golf Game</h1>
                        <div>
                            <HashRouter >
                                <Link className={classes.linksOne} to="/">Course Search</Link>
                                <Link className={classes.links} to='/allstats'>Career Stats</Link>
                            </HashRouter>
                        </div>
                    </div>
                    <Button onClick={this.newScoreButton}>Add New Score</Button>
                    <TableContainer>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Course</TableCell>
                                    <TableCell>Score</TableCell>
                                    <TableCell> +/- </TableCell>
                                    <TableCell>Fairways</TableCell>
                                    <TableCell>Greens</TableCell>
                                    <TableCell>Putts</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.stats.map((round) => (
                                    <TableRow>
                                        <TableCell>{round.date.split("T")[0]}</TableCell>
                                        <TableCell>{round.course}</TableCell><p>X</p>
                                        <TableCell>{round.score}</TableCell>
                                        <TableCell>{round.relation}</TableCell>
                                        <TableCell>{round.fairways}</TableCell>
                                        <TableCell>{round.greens}</TableCell>
                                        <TableCell>{round.putts}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>


                    </TableContainer>
                </div >
            )
        } else {
            return (
                <div>
                    <div className={classes.header}>
                        <h1>Your Golf Game</h1>
                        <HashRouter>
                            <Link to="/">Course Search</Link>
                        </HashRouter>
                    </div>
                    <div>
                        <form ref="statsForm" className={classes.form}>
                            <DatePicker
                                onChange={this.handleChange}
                                selected={this.state.startDate}
                                type='text'
                                ref='date'
                                placeholder='Date' />
                            <input type='text' ref='course' placeholder='Course Name'></input>
                            <input type='text' ref='score' placeholder='Score'></input>
                            <input type='text' ref='relation' placeholder='Plus/Minus'></input>
                            <input type='text' ref='fairways' placeholder='Fairways Hit'></input>
                            <input type='text' ref='greens' placeholder='Greens'></input>
                            <input type='text' ref='putts' placeholder='Putts'></input>
                            <div>
                                <Button onClick={this.backToStatsButton}>BacktoStats</Button>
                                <Button onClick={this.addScore}>Add Round</Button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
    }
}

export default withStyles(statPageStyles)(StatsPage);