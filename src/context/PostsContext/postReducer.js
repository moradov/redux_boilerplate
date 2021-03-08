export default function (state, action) {
  switch (action.type) {
    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter((item) => item !== action.payload),
      };
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };

    default:
      return {
        ...state,
      };
  }
}
