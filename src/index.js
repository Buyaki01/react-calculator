import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import CalculatorContainer from './components/CalculatorContainer';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CalculatorContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
