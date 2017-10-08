import React, { Component } from 'react';
import Login from './scenes/Home/Home';
import './style.css';

export default class Memebank extends Component {
  render = () => {
    const content = <div id='content'><Login /></div>;
    return <div className='Memebank'>{content}</div>;
  }
}
