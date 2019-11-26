import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from './Routes';
import Tryget from '../src/Views/Tryget';
const browserHistory = createBrowserHistory();


export default class App extends Component {
  render() {
    return (
        <Router history={browserHistory}>
           <Routes /> 
           {/* <Tryget /> */}
        </Router>
        
    );
  }
}