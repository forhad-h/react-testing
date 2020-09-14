import React from 'react'
import { shallow } from 'enzyme'

import SharedButton from './index'
import { findByTestAttr, checkProps } from '../../../Utils'

describe('SharedButton Component', () => {

  describe('Checking PropTypes', () => {

    it('should not throw a warning', () => {
      const expectedProps = {
        buttonText: 'Test Button',
        emitEvent: () => { }
      }

      const propsError = checkProps(SharedButton, expectedProps)

      expect(propsError).toBeUndefined()
    })

  })

  describe('Renders', () => {

    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: 'Test Button',
        emitEvent: () => { }
      }
      wrapper = shallow(<SharedButton {...props} />)
    })


    it('should render the button', () => {
      const button = findByTestAttr(wrapper, 'buttonComponent')

      expect(button.length).toBe(1)
    })

  })


})