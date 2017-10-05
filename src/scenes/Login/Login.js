import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
  render = () => {

    const logo = [
      <span id='meme'>meme</span>,
      <span id='bank'>bank</span>
    ];

    const title = <div id='title'><h1>{logo}</h1></div>;
    return <div className='Login'>{title}</div>;
  }
}
