import React, { useReducer } from 'react';
import postReducer from './postReducer';
const PostsContext = React.createContext();

const PostsContextProvider = ({ children }) => {
  const initState = {
    posts: ['post 1', 'post 2', 'post 3'],
  };
  const [state, dispatch] = useReducer(postReducer, initState);

  const deletePost = (postId) => {
    dispatch({ type: 'DELETE_POST', payload: postId });
  };
  const addPost = (postId) => {
    dispatch({ type: 'ADD_POST', payload: postId });
  };
  return (
    <PostsContext.Provider
      value={{
        posts: state.posts,
        deletePost,
        addPost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export { PostsContextProvider, PostsContext };
