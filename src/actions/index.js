import { types } from './types'
import axios from 'axios'

export const getPosts = () => {

  return async dispatch => {
    try {
      const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      dispatch({ type: types.GET_POSTS, posts })
    } catch (err) {
      console.error(err)
    }
  };

}