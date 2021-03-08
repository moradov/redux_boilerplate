import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Home from './Home';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';
import Navbar from './components/UI/Navbar';
import Alert from './components/UI/Alert';

export default function App() {
  return (
    <Router>
      <Provider store={store}>
        <Navbar />
        <Alert />
        <Switch>
          <Route path="/add">
            <AddPost />
          </Route>
          <Route path="/edit/:postId">
            <EditPost />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
}
