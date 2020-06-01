import React, { Component } from 'react';

class NoCourseFound extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            <h1>No Courses Found! Search Agaim</h1>
        </div>);
    }
}

export default NoCourseFound;