import React from 'react'
import { shallow, mount } from 'enzyme'

import { findByTestAttr, testStore } from '../Utils'
import Main from './Main'
import ListItem from './component/listItem'

describe('Main Component', () => {

  let wrapper, mainInstance

  beforeEach(() => {

    const initialState = {
      posts: [{
        title: 'Title 1',
        body: 'Some text here'
      }, {
        title: 'Title 1',
        body: 'Some text here'
      }, {
        title: 'Title 1',
        body: 'Some text here'
      }]
    }

    const store = testStore(initialState)

    wrapper = mount(<Main store={store} />).childAt(0)

    mainInstance = wrapper.instance()

  })

  it('should render without error', () => {
    const mainComponent = findByTestAttr(wrapper, 'mainComponent')

    expect(mainComponent).toHaveLength(1)


  })

  it('should render posts list', () => {

    const postList = findByTestAttr(wrapper, 'postList')

    expect(postList).toHaveLength(1)

  })

  it('should render three list items of post', () => {

    expect(wrapper.find(ListItem)).toHaveLength(3)

  })

  it('updateState method should update state with', () => {

    mainInstance.updateState()

    const newState = mainInstance.state.hideButton

    expect(newState).toBe(true)

  })

  it('simplyReturn should return value as expected', () => {

    const newValue = mainInstance.simplyReturn(1)

    expect(newValue).toEqual(2)

  })

})