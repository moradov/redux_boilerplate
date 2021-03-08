import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './reducers/index';
const intiState = {};
const middleware = [thunk];
const store = createStore(
  mainReducer,
  intiState,
  applyMiddleware(...middleware)
);

export default store;
