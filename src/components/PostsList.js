import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postsAction';

import PostItem from './PostItem';

const PostsList = ({ posts, deletePost }) => {
  return (
    <div>
      {posts &&
        posts.map((post) => (
          <PostItem post={post} deletePost={deletePost} key={post.id} />
        ))}
    </div>
  );
};
const mapStateToProps = (state) => ({ posts: state.posts.posts });

export default connect(mapStateToProps, { deletePost })(PostsList);
