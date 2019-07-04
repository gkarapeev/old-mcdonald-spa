import React from 'react'
import ReactDOM from 'react-dom'

// Router
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

// CSS
import './index.css'

// Components
import App from './components/App/App'
import * as serviceWorker from './serviceWorker'
import animal_list from './data/animal_list'

// Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// Reducers
import animalsReducer from './reducers/animalsReducer'
// Actions
const action = {
  type: 'changeAnimal',
  payload: {
    newAnimal: 'new Animalz'
  }
}

// Action Creators
// const updateAnimalsAction = {
//   type: 'updateAnimals',
//   payload: {
//     animals: ['lol', 'za']
//   }
// }



// Store
const store = createStore(animalsReducer, { animals: [...animal_list] }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// ACTUAL STUFF

const hist = createBrowserHistory()
ReactDOM.render(
  <Router history={hist}>
    <Provider store={store}>
      <Route path='/' component={App} />
    </Provider>
  </Router>,
  document.getElementById('root'))

serviceWorker.unregister()
