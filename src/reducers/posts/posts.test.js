import { types } from '../../actions/types'
import postReducer from './index'

describe("Post Reducer", () => {

  it('should return initial state in no-type', () => {
    const newState = postReducer(undefined, {})

    expect(newState).toEqual(null)

  })

  it('should return new state if receiving type', () => {
    const posts = [
      { 'title': 'Test title one' },
      { 'title': 'Test title two' }
    ]
    const newState = postReducer(undefined, {
      type: types.GET_POSTS,
      posts: posts
    })


    expect(newState).toMatchObject(posts)

  })

})