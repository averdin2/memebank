import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
  render = () => {

    const logo = [
      <span id='meme'>meme</span>,
      <span id='bank'>bank</span>
    ];

    const title = <div id='title'><h1>{logo}</h1></div>;
    return <div className='Home'>{title}</div>;
  }
}
