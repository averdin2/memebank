import React, { Component } from 'react';

// Redux
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware
} from 'redux';

// React-Router
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// Scenes
import Login from './scenes/Login/Login';
import Join from './scenes/Join/Join';
import Bank from './scenes/Bank/container.js';

// Styles
import './style.css';

// Reducers
import Root from './reducer.js';

// Middleware
import bankMiddleware from './scenes/Bank/services/middleware.js';


const store = createStore(Root, applyMiddleware(bankMiddleware));

export default class Memebank extends Component {
  render () {

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
