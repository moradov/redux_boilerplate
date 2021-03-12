import { combineReducers } from 'redux';

import postsReducer from './postsReducer';
import alertReducer from './alertReducer';

const mainReducer = combineReducers({
  posts: postsReducer,
  alert: alertReducer,
});

export default mainReducer;
