import React, { Component } from 'react';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// React-Router
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// Scenes
import Login from './scenes/Login/Login';
import Join from './scenes/Join/Join';
import Bank from './scenes/Bank/containers.js';

// Reducers
import Root from './reducers.js';

// Styles
import './style.css';

// Create store for application state
const store = createStore(Root);

export default class Memebank extends Component {
  render () {

    // Routing
    const routes = (
      <Switch>
        <Route exact path='/' component={Bank} />
        <Route path='/login' component={Login} />
        <Route path='/join' component={Join} />
      </Switch>
    );
    const router = <BrowserRouter>{routes}</BrowserRouter>;

    return <Provider store={store}><div className='Memebank'>{router}</div></Provider>;
  }
}
