import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import LandingPage from './components/landingPage';
import CourseContainer from './components/courseContainer'
import courses from './components/courseData.json';
import routes from './routes';
import { HashRouter } from "react-router-dom";


class App extends React.Component {
  state = {
    names: "",
    searchTerm: ''
  }
  componentDidMount() {
    this.setState({
      names: ""
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
      <HashRouter>
        {routes}
      </HashRouter>
    );
  }
}

export default App;