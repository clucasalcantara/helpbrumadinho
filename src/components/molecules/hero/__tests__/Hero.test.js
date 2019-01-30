import React from 'react'
import { shallow } from 'enzyme'
import Hero from '../Hero'

describe('Hero component', () => {
  it('should renders without crash', () => {
    const wrapper = shallow(<Hero headline="Work with coffee" />)

    expect(wrapper).toMatchSnapshot()
  })
})
