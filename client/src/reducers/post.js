import { LOAD_POST, LOAD_POST_FAILURE } from "../actions/types";

const initialState = {
  post: [],
  error: {},
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_POST:
      return {
        ...state,
        post: payload,
        loading: false
      };
    case LOAD_POST_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
