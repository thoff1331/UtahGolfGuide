import React, { Component } from 'react';
import Name from './Course'
class CourseContainer extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.names.map(name => <Name name={name} />)}
            </div>
        );
    }
}

export default CourseContainer;