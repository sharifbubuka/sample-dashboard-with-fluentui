import React from 'react';
import './App.css';

import {
  Renderer,
} from './components/reusables';

import {
  HomePage,
  ReportsPage
} from './components/pages';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
          <Route path='/reports' component={ReportsPage}/>
          <Route exact path='/' component={HomePage} />
      </Switch>
    </Router>
  );
}
