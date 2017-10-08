import React, { Component } from 'react';
import Home from './scenes/Home/Home';
import './style.css';

export default class Memebank extends Component {
  render = () => {
    const content = <div id='content'><Home /></div>;
    return <div className='Memebank'>{content}</div>;
  }
}
