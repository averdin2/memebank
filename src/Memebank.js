import React, { Component } from 'react';

// React-Router
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// Scenes
import Login from './scenes/Login/container.js';
import Join from './scenes/Join/container.js';
import Main from './scenes/Main/container.js';

// Styles
import './style.css';

export default class _Memebank extends Component {
  render () {

    const routes = (
      <Switch>
        { this.props.token ? <Route exact path='/' component={Main} /> : <Route exact path='/' component={Login} /> }
        <Route path='/join' component={Join} />
      </Switch>
    );

    const router = <BrowserRouter>{routes}</BrowserRouter>;

    return <div className='Memebank'>{router}</div>;
  }
}
