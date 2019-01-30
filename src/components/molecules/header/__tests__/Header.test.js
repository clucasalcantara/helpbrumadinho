import React from 'react'
import { shallow } from 'enzyme'
import Header from '../Header'

describe('Header component', () => {
  it('should renders without crash', () => {
    const wrapper = shallow(
      <Header navItems={[{ text: 'Work with coffee', path: '/' }]} />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
