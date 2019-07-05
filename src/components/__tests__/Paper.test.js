import React from 'react'
import Paper from '../Paper/Paper'
import { shallow } from 'enzyme'


it('correctly maps props to class names', () => {
  const wrapper = shallow(<Paper bg='white' classes={['song']} />)

  expect(wrapper.containsMatchingElement(<div className={'paper white song'}></div>)).toEqual(true)
});
