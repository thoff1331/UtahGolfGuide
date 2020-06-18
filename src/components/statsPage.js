import React, { Component } from 'react';
import { withStyles } from "@material-ui/core";
import { statPageStyles } from "./statPageStyles";
import { Link, HashRouter } from "react-router-dom";
import axios from 'axios';


class StatsPage extends Component {
    constructor() {
        super();
        this.state = {
            stats: []
        }
    }
    componentDidMount() {

    }
    addScore = (e) => {
        console.log('hit')
        e.preventDefault()
        let data = {
            date: this.refs.date.value,
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
            body: JSON.stringify(data)
        });
        fetch(request).then(function (response) {
            response.json().then(function (data) {
                console.log(data)
            })
        })
    }
    render() {
        const { classes } = this.props
        return (
            <div>
                <div className={classes.header}>
                    <h1>Your Golf Game</h1>
                    <HashRouter>
                        <Link to="/">Course Search</Link>
                    </HashRouter>
                </div>
                <div>
                    <form ref="statsForm">
                        <input type='text' ref='date' placeholder='Date'></input>
                        <input type='text' ref='course' placeholder='Course Name'></input>
                        <input type='text' ref='score' placeholder='Score'></input>
                        <input type='text' ref='relation' placeholder='Plus/Minus'></input>
                        <input type='text' ref='fairways' placeholder='Fairways Hit'></input>
                        <input type='text' ref='greens' placeholder='Greens'></input>
                        <input type='text' ref='putts' placeholder='Putts'></input>
                        <button onClick={this.addScore}>Add Round</button>
                    </form>
                </div>
            </div>

        )
    }
}

export default withStyles(statPageStyles)(StatsPage);