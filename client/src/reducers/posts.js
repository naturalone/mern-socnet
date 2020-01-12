import { LOAD_POSTS, LOAD_POSTS_FAILURE } from "../actions/types";

const initialState = {
  posts: [],
  error: {},
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case LOAD_POSTS_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
