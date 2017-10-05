import React, { Component } from 'react';
import Login from './scenes/Login/Login';
import './style.css';

export default class Memebank extends Component {
  render = () => {
    const content = <div id='content'><Login /></div>;
    return <div className='Memebank'>{content}</div>;
  }
}
