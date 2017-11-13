import React, { Component } from 'react';
import './Title.css';

export default class Title extends Component {
  render () {

    // Memebank logo
    const logo = (
      <h1>
        <span id='meme'>meme</span>
        <span id='bank'>bank</span>
      </h1>
    );

    return <div className='Title'>{logo}</div>;
  }
}
