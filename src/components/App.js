import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Header from './Header';

const App = () => {

  return (
    <Router>
      <Header />
    </Router>
  );
};

export default App;
