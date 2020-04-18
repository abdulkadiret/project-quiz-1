import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
