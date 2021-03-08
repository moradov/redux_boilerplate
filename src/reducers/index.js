import { combineReducers } from 'redux';

import postsReducer from './postsReducer';

const mainReducer = combineReducers({ posts: postsReducer });

export default mainReducer;
