import React from 'react'

import Word from '../Word/Word'
import getAnimals from '../../data/animal_list'
import { shallow } from 'enzyme'


it('contains a span element', () => {
  const wrapper = shallow(<Word animal={getAnimals()[1]}/>)

  expect(wrapper.html()).toMatch(/(<span)(.*)>(.*)(<\/span>)/)
});
