import { types } from '../../actions/types'

export default (state = null, action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return action.posts;
    default:
      return state;
  }
}