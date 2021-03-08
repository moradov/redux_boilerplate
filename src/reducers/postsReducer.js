import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  SET_ALERT,
  CLEAR_ALERT,
} from '../actions/types';
const initState = {
  posts: [
    { title: 'post1', body: 'content1', id: 'post1' },
    { title: 'post2', body: 'content2', id: 'post2' },
    { title: 'post3', body: 'content3', id: 'post3' },
  ],
  alert: null,
};
export default function (state = initState, action) {
  switch (action.type) {
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((item) => item.id !== action.payload),
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case EDIT_POST:
      return {
        ...state,
        posts: [
          ...state.posts.filter((item) => item.id !== action.payload.id),
          action.payload,
        ],
      };
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    case CLEAR_ALERT:
      return {
        ...state,
        alert: null,
      };

    default:
      return {
        ...state,
      };
  }
}
