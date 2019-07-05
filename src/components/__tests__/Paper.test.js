import React from 'react'
import Paper from '../Paper/Paper'
import { shallow } from 'enzyme'


it('contains exactly 2 instances of the NavLink component', () => {
  const wrapper = shallow(<Paper bg='white' classes={['song']} />)

  expect(wrapper.containsMatchingElement(<div className={'paper white song'}></div>)).toEqual(true)
});
