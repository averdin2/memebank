import React, { Component } from 'react';
import Login from './scenes/Login/Login';
import Join from './scenes/Join/Join';
import './Home.css';

export default class Home extends Component {
  render = () => {
    const scene = <Login/>;
    return <div className='Home'>{scene}</div>;
  }
}
