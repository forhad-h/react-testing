import React from 'react'
import { shallow } from 'enzyme'

import Header from './index'
import { findByTestAttr } from '../../../Utils'

describe('Header Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it('should render without errors', () => {
    const headerComponent = findByTestAttr(wrapper, 'headerComponent')
    expect(headerComponent.length).toBe(1)
  })

  it('should logo without errors', () => {
    const logoImg = findByTestAttr(wrapper, 'logoImg')
    expect(logoImg.length).toBe(1)
  })

})
