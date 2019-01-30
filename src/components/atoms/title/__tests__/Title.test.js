import React from 'react'
import { shallow } from 'enzyme'
import Title from '../Title'

describe('Title component', () => {
  it('should renders without crash', () => {
    const wrapper = shallow(<Title content="Work with coffee" />)

    expect(wrapper).toMatchSnapshot()
  })
})
