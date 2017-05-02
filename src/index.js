import React from 'react';
import ReactDOM from 'react-dom';
import Speakers from './components/Speakers';
import About from './components/About';
import App from './App';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';


ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={App} />
        <Route path="/speakers" component={Speakers} />
        <Route path="/about" component={About} />
    </div>
  </Router>,
  document.getElementById('root')
);
