import React, { useContext, useState } from 'react';
import { PostsContext } from './context/PostsContext/postContext';

const Home = () => {
  const { posts, deletePost, addPost } = useContext(PostsContext);
  const [post, setPost] = useState('');
  return (
    <div>
      <input onChange={(event) => setPost(event.target.value)} />
      <button onClick={() => addPost(post)}>add</button>
      {posts &&
        posts.map((post) => (
          <div onClick={() => deletePost(post)}> {post} </div>
        ))}
    </div>
  );
};

export default Home;
