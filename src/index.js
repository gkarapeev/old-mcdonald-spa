import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

const hist = createBrowserHistory()

ReactDOM.render(
  <Router history={hist}>
    <Route path='/' component={App}/>
  </Router>,
  document.getElementById('root'));

serviceWorker.unregister();
