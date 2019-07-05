import React from 'react'

import { NavLink } from 'react-router-dom'

import Nav from '../Nav/Nav'
import { shallow } from 'enzyme'


it('contains exactly 2 instances of the NavLink component', () => {
  const wrapper = shallow(<Nav />)

  expect(wrapper.find(NavLink).length).toEqual(2)
});
