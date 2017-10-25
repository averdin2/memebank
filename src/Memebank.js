import React, { Component } from 'react';
import Home from './scenes/Home/Home';
import Main from './scenes/Main/Main';
import './style.css';

export default class Memebank extends Component {
  render = () => {
    const home = <Home/>;
    const main = <Main/>;
    return <div className='Memebank'>{home}</div>;
  }
}
