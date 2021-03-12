import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/postsAction';
import { setAlert } from '../actions/alertActions';
import { withRouter } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import Container from './UI/Container';

const AddPost = ({ addPost, setAlert, history }) => {
  const [postContent, setPostContent] = useState({ title: '', body: '' });

  /// submit post
  const addPostClicked = () => {
    //chek if inputs are not empty
    if (postContent.title !== '' && postContent.body !== '') {
      //prepare post object
      const id = Math.floor(Math.random() * 100);
      const post = {
        id,
        title: postContent.title,
        body: postContent.body,
      };
      addPost(post);
      //clear post state after submiting post
      setPostContent({ title: '', body: '' });
      setAlert({
        message: 'post added succesfuly',
        position: 'bottom',
        color: 'green',
        delay: 3500,
      });
      //redirect after submiting post
      history.push('/');
    } else {
      // show warning alert if inputs are not valid
      setAlert({
        message: 'all inputs are required',
        position: 'bottom',
        color: 'red',
        delay: 3500,
      });
    }
  };

  return (
    <Container>
      <Form variant="mt-4">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={postContent.title}
            onChange={(e) =>
              setPostContent({ ...postContent, title: e.target.value })
            }
            type="text"
            placeholder="Enter Title"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter Your Post Content"
            value={postContent.body}
            onChange={(e) =>
              setPostContent({ ...postContent, body: e.target.value })
            }
          />
        </Form.Group>
        <Button onClick={() => addPostClicked()} variant="primary">
          Add
        </Button>
      </Form>
    </Container>
  );
};

export default connect(null, { addPost, setAlert })(withRouter(AddPost));
