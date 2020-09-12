import React from 'react'
import { shallow } from 'enzyme'

import Header from './index'
import { findByTestAttr } from '../../../Utils'

describe('Header Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it('should render Header', () => {
    const headerComponent = findByTestAttr(wrapper, 'headerComponent')
    expect(headerComponent.length).toBe(1)
  })

  it('should render Logo', () => {
    const logoImg = findByTestAttr(wrapper, 'logoImg')
    expect(logoImg.length).toBe(1)
  })

})
