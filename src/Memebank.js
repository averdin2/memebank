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
import Bank from './scenes/Bank/container.js';

// Styles
import './style.css';



export default class _Memebank extends Component {
  render () {
    console.log(this.props.token);

    const routes = (
      <Switch>
        { this.props.token ? <Route exact path='/' component={Bank} /> : <Route path='/' component={Login} /> }
        <Route path='/join' component={Join} />
      </Switch>
    );

    const router = <BrowserRouter>{routes}</BrowserRouter>;

    return <div className='Memebank'>{router}</div>;
  }
}
