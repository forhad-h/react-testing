import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '../../../Utils'
import Headline from './index'

describe("Headline Component", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Headline />)
  })


  describe("Without props", () => {

    const wrapper = shallow(<Headline />)

    it('should return null', () => {
      const mainComponent = findByTestAttr(wrapper, 'main')
      expect(mainComponent.length).toBe(0)
    })

  })

  describe("With props", () => {

    beforeEach(() => {
      wrapper.setProps({ title: "Test title", desc: "Test description" })
    })

    it("should render main component", () => {

      const mainComponent = findByTestAttr(wrapper, 'main')

      expect(mainComponent.length).toBe(1)

    })

    it("should render title", () => {

      const title = findByTestAttr(wrapper, 'title')

      expect(title.length).toBe(1)

    })

    it("should render description", () => {

      const desc = findByTestAttr(wrapper, 'desc')

      expect(desc.length).toBe(1)

    })


  })

})