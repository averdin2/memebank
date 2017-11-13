import React, { Component } from 'react';

// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// react-router
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// Scenes
import Login from './scenes/Login/Login';
import Join from './scenes/Join/Join';
import VisibleBank from './scenes/Bank/containers.js';

// Reducers
import Root from './reducers.js';

// Styles
import './style.css';

// Create store for App state
const store = createStore(Root);

export default class Memebank extends Component {
  render () {

    // Routing
    const routes = (
      <Switch>
        <Route exact path='/' component={VisibleBank} />
        <Route path='/login' component={Login} />
        <Route path='/join' component={Join} />
      </Switch>
    );
    const router = <BrowserRouter>{routes}</BrowserRouter>;

    return <Provider store={store}><div className='Memebank'>{router}</div></Provider>;
  }
}
