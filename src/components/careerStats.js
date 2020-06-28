import React, { Component } from 'react';
import { Link, HashRouter } from "react-router-dom";
import { withStyles, Button } from "@material-ui/core";
import { careerStatsStyles } from './careerStatsStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


class careerStats extends Component {
    state = {}
    render() {
        const { classes } = this.props
        return (
            <div className={classes.header}>
                <h1>Your Career Stats Snapshot</h1>
                <div>
                    <HashRouter >
                        <Link className={classes.linksOne} to="/">Course Search</Link>
                        <Link className={classes.links} to='/stats'>Rounds</Link>
                    </HashRouter>
                </div>
                <div className={classes.tcr}>
                    <TableContainer >
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Average Score</TableCell>
                                    <TableCell>Relation To Par </TableCell>
                                    <TableCell>Average Fairways</TableCell>
                                    <TableCell>Average Greens</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>7</TableCell>
                                    <TableCell>7</TableCell>
                                    <TableCell>7</TableCell>
                                    <TableCell>7</TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>);
    }
}

export default withStyles(careerStatsStyles)(careerStats);