import React from 'react'
import { shallow } from 'enzyme'
import Button from '../Button'

describe('Button component', () => {
  it('should render without crash', () => {
    const wrapper = shallow(
      <Button text="Sugira agora" handleClick={() => console.log('clicked')} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
