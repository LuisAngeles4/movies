import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Movies from './components/Movies'
import {Switch, Route, NavLink} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="main-container">
        <ul className="navbar">
        <NavLink to="/" style={{color:"#fff", textDecoration:"none"}}>
          <li className="link">Home</li>
        </NavLink>
        <NavLink to="./Movies" style={{color:"#fff", textDecoration:"none"}}>
        <li className="link">Movies</li>
        </NavLink>
        </ul>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/movies" component={Movies}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
