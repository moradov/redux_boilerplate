import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  SET_ALERT,
  CLEAR_ALERT,
} from './types';
export const deletePost = (postId) => (dispatch) =>
  dispatch({ type: DELETE_POST, payload: postId });

export const addPost = (post) => (dispatch) =>
  dispatch({ type: ADD_POST, payload: post });

export const editPost = (EditedPost) => (dispatch) => {
  dispatch({ type: EDIT_POST, payload: EditedPost });
};
export const clearAlert = () => (dispatch) => {
  dispatch({ type: CLEAR_ALERT });
};
export const setAlert = (alertPayload) => (dispatch) => {
  dispatch({ type: SET_ALERT, payload: alertPayload });

  setTimeout(() => dispatch({ type: CLEAR_ALERT }), alertPayload.delay);
};
