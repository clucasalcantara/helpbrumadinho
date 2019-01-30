import React from 'react'
import { shallow } from 'enzyme'
import Card from '../Card'

describe('Card component', () => {
  it('should renders without crash', () => {
    const cardData = {
      name: 'Seven Wonders',
      image: 'x'
    }
    const wrapper = shallow(<Card data={cardData} />)

    expect(wrapper).toMatchSnapshot()
  })
})
