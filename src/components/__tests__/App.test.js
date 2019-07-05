import React from 'react'

import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
const hist = createBrowserHistory()

import App from '../App/App'
import Nav from '../Nav/Nav'
import { mount } from 'enzyme'


it('contains exactly one instance of the Nav component', () => {
  const wrapped = mount(
    <Router history={hist}>
      <Route path='/' component={App} />
    </Router>
  )

  expect(wrapped.find(Nav).length).toEqual(1)
});
