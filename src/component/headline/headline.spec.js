import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, checkProps } from '../../../Utils'
import Headline from './index'

describe("Headline Component", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Headline />)
  })

  describe("Checking Prop Types", () => {
    it('should not throw a warning', () => {

      const expectedProps = {
        title: "Title",
        desc: "Desc",
        tempArr: [{
          fName: "John",
          lName: "Doe",
          email: "johndoe@gm.com",
          age: 23,
          onlineStatus: true
        }]
      }
      const propErr = checkProps(wrapper, expectedProps)

      expect(propErr).toBeUndefined()

    })
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