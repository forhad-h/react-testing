import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, checkProps } from '../../../Utils'
import ListItem from './index'

describe('ListItem Component', () => {

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<ListItem />)
  })


  describe('Checking PropTypes', () => {

    it('should not throw a warning', () => {

      const expectedProps = {
        title: "Test Title",
        desc: "Some Text Description"
      }
      const propsError = checkProps(ListItem, expectedProps)

      expect(propsError).toBeUndefined()

    })

  })

  describe('Without Props', () => {

    it('should not return anything', () => {

      const component = findByTestAttr(wrapper, 'listItemComponent')

      expect(component.length).toBe(0)

    })

  })

  describe('Renders with props', () => {

    beforeEach(() => {
      wrapper.setProps({
        title: "Test Title",
        desc: "Some Text Description"
      })
    })

    it('should render ListItem', () => {

      const listItem = findByTestAttr(wrapper, 'listItemComponent')

      expect(listItem.length).toBe(1)

    })

    it('should render the title', () => {

      const title = findByTestAttr(wrapper, 'componentTitle')

      expect(title.length).toBe(1)

    })

    it('should render the description', () => {

      const desc = findByTestAttr(wrapper, 'componentDesc')

      expect(desc.length).toBe(1)

    })

  })


})