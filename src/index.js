import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

const hist = createBrowserHistory()

ReactDOM.render(
  <Router history={hist}>
    <App history={hist}/>
  </Router>,
  document.getElementById('root'));

serviceWorker.unregister();
