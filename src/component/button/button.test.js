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

    let wrapper, mockFunc;
    beforeEach(() => {

      mockFunc = jest.fn()

      const props = {
        buttonText: 'Test Button',
        emitEvent: mockFunc
      }
      wrapper = shallow(<SharedButton {...props} />)
    })


    it('should render the button', () => {
      const button = findByTestAttr(wrapper, 'buttonComponent')

      expect(button.length).toBe(1)
    })

    it('should emit a callback on click event', () => {

      const button = findByTestAttr(wrapper, 'buttonComponent')

      button.simulate('click')

      const callback = mockFunc.mock.calls

      expect(callback).toHaveLength(1)


    })

  })


})