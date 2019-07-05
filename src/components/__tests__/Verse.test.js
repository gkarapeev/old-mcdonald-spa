import React from 'react'

import Verse from '../Verse/Verse'
import getAnimals from '../../data/animal_list'
import { shallow } from 'enzyme'


it('contains the string \'Old MacDonald\'', () => {
  const wrapper = shallow(<Verse animal={getAnimals()[1]}/>)

  expect(wrapper.html()).toContain('Old MacDonald')
});
