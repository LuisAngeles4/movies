import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Movie from './components/Movies'
import Header from './components/Header'
import Footer from './components/Footer'
import {Switch, Route, NavLink} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/movies" component={Movie}></Route>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
