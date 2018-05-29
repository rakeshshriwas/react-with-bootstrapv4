import React, { Component } from 'react';
import {BrowserRouter as Router, Route  } from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="">
          <Route exact path = '/' component = {Home}></Route>
          <Route exact path='/about' component={About}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
