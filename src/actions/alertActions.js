import { SET_ALERT, CLEAR_ALERT } from './types';

export const clearAlert = () => (dispatch) => {
  dispatch({ type: CLEAR_ALERT });
};
export const setAlert = (alertPayload) => (dispatch) => {
  dispatch({ type: SET_ALERT, payload: alertPayload });

  setTimeout(() => dispatch({ type: CLEAR_ALERT }), alertPayload.delay);
};
