import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import LandingPage from './components/landingPage';
import CourseContainer from './components/courseContainer'
import courses from './components/courseData.json';
const courseList = courses.courses.map((course) => {
  return course.name
})
class App extends React.Component {
  state = {
    names: courseList,
    searchTerm: ''
  }
  componentDidMount() {
    this.setState({
      names: courseList
    })
  }
  editSearchTerm = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  dynamicSearch = () => {
    return this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }


  render() {
    return (
      <div style={{ textAlign: 'center', paddingTop: '30vh' }}>
        <input type='text' value={this.state.searchTerm} onChange={this.editSearchTerm} placeholder='Search for a name!' />
        <br></br>
        <h3>These are the important names:</h3>
        {this.state.searchTerm === '' ? null : <CourseContainer names={this.dynamicSearch()} />}
      </div>
    );
  }
}

export default App;