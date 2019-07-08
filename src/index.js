import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import './index.css'
import App from './components/App/App'
import * as serviceWorker from './serviceWorker'

import song_list from './data/song_list'

const hist = createBrowserHistory()

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {song_list.map((song, index) => {
        return (
          <Route path={song.path + '/:mode'} render={(props) => <App {...props} song={song} songList={song_list}/>} key={index}/>
        )
      })}
      <Redirect to='/old-macdonald/original' />
    </Switch>
  </Router>,
  document.getElementById('root'));

serviceWorker.unregister();
