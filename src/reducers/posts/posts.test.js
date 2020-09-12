import { types } from '../../actions/types'
import postReducer from './index'

describe("Post Reducer", () => {

  it('should return initial state in no-type', () => {
    const newState = postReducer(undefined, {})

    expect(newState).toEqual([])

  })

  it('should return new state if receiving type', () => {
    const posts = [
      { title: "Title 1" },
      { title: "Title 2" },
      { title: "Title 3" }
    ]
    const newState = postReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts
    })

    expect(newState).toEqual(posts)

  })

})