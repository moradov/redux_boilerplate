import { ADD_POST, DELETE_POST, EDIT_POST } from '../actions/types';
const initState = {
  posts: [
    { title: 'post1', body: 'content1', id: 'post1' },
    { title: 'post2', body: 'content2', id: 'post2' },
    { title: 'post3', body: 'content3', id: 'post3' },
  ],
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

    default:
      return {
        ...state,
      };
  }
}
