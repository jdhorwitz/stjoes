import React from 'react';
import ReactDOM from 'react-dom';
import Speakers from './components/Speakers';
import About from './components/About';
import Home from './components/Home';
import App from './App';
import { HashRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';


ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/speakers" component={Speakers} />
        <Route path="/about" component={About} />
    </div>
  </Router>,
  document.getElementById('root')
);
