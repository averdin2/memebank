import React, { Component } from 'react';
import Login from './components/Login/Login';
import Join from './components/Join/Join';
import './Home.css';

export default class Home extends Component {
  render = () => {

    const logo = [
      <span id='meme'>meme</span>,
      <span id='bank'>bank</span>
    ];

    const title = <div id='title'><h1>{logo}</h1></div>;
    const login = <Login />;
    const content = [
      title,
      login
    ];
    return <div className='Home'>{content}</div>;
  }
}
