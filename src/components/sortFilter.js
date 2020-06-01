

import React, { Component } from 'react';
import sortOptions from "./filterData.json"
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from "@material-ui/styles"
import { sortFilterStyles } from "./sortFilterStyles";

class SortFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: sortOptions,
            sort: ""
        }

    }
    render() {
        const defaultSort = (this.state.sort === "" ? "A-Z" : this.state.sort)
        const { classes } = this.props
        const { options, sort } = this.state
        console.log(this.state)
        return (
            <FormControl variant="filled" className={classes.FormControl}>
                <InputLabel className={classes.sortText} id="demo-simple-select-filled-label"> Sort:  </InputLabel>
                <Select className={classes.sortButton}
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={defaultSort}
                    onChange={(event) => { this.setState({ sort: (event.target.value) }) }}
                >
                    <MenuItem value={options.sortOptions[0]}>
                    </MenuItem>
                    <MenuItem value={options.sortOptions[0]}>{options.sortOptions[0]}</MenuItem>
                    <MenuItem value={options.sortOptions[1]}>{options.sortOptions[1]}</MenuItem>
                    <MenuItem value={options.sortOptions[2]}>{options.sortOptions[2]}</MenuItem>
                </Select>
            </FormControl >
        );
    }
}

export default withStyles(sortFilterStyles)(SortFilter);