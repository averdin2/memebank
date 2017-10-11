import React, { Component } from 'react';
import Home from './scenes/Home/Home';
import './style.css';

export default class Memebank extends Component {
  render = () => {
    const home = <Home/>;
    return <div className='Memebank'>{home}</div>;
  }
}
