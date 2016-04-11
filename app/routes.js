import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import About from './components/About';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/login" component={Login}/>
    <Route path="/about" component={About}/>
  </Route>
);