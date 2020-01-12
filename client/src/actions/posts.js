import axios from "axios";
import { LOAD_POSTS, LOAD_POSTS_FAILURE } from "./types";

export const loadPosts = () => async dispatch => {
  try {
    const res = await axios.get("/api/posts");

    dispatch({
      type: LOAD_POSTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: LOAD_POSTS_FAILURE,
      payload: {
        msg: err.response.statusText,
        status: err.response.state
      }
    });
  }
};
