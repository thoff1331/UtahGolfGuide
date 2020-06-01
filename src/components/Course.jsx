import React, { Component } from 'react';
import './courseStyles.scss'

class Course extends Component {
    render() {
        console.log(this.props)
        return (<div className='courseItem'>
            {this.props.name}
        </div>);
    }
}

export default Course;