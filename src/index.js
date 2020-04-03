import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.scss';
import App from './App';
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry';
import "./assets/fonts/Montserrat-Medium.ttf";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundry>
        <Router>
            <App />
        </Router>
    </ErrorBoundry>

  </React.StrictMode>,
  document.getElementById('root')
);