import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, testStore } from '../Utils'
import App from './App'
import ListItem from './component/listItem'

describe('App Component', () => {

  let wrapper, appInstance

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

    wrapper = shallow(<App store={store} />).childAt(0).dive()

    appInstance = wrapper.instance()

  })

  it('should render without error', () => {
    const appComponent = findByTestAttr(wrapper, 'appComponent')

    expect(appComponent).toHaveLength(1)


  })

  it('should render posts list', () => {

    const postList = findByTestAttr(wrapper, 'postList')

    expect(postList).toHaveLength(1)

  })

  it('should render three list items of post', () => {

    expect(wrapper.find(ListItem)).toHaveLength(3)

  })

  it('updateState method should update state with', () => {

    appInstance.updateState()

    const newState = appInstance.state.hideButton

    expect(newState).toBe(true)

  })

  it('simplyReturn should return value as expected', () => {

    const newValue = appInstance.simplyReturn(1)

    expect(newValue).toEqual(2)

  })

})