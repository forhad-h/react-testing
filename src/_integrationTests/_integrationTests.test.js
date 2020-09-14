import moxios from 'moxios'

import { testStore } from '../../Utils'
import { getPosts } from '../actions/'

describe('getPosts action', () => {

  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  test('should update store correctly', async () => {
    const expectedState = [{
      title: 'Test title 1',
      body: 'Some description here'
    }, {
      title: 'Test title 2',
      body: 'Some description here'
    }, {
      title: 'Test title 3',
      body: 'Some description here'
    }]

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: expectedState
      })
    })

    const store = testStore()

    try {
      await store.dispatch(getPosts())
      const newState = store.getState()
      expect(newState.posts).toEqual(expectedState)
    } catch (err) {
      console.error(err)
    }

  })

})