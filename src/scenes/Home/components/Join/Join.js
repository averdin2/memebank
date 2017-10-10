import React, { Component } from 'react';
import './Join.css';

export default class Join extends Component {
  render = () => {
    const email = <input id="email" type="text" placeholder={"email"} name="name" />;
    const password = <input id="password" type="text" placeholder={"password"} name="password" />;
    const confirmPassword = <input id="password" type="text" placeholder={"re-enter password"} name="password" />;
    const joinButton = <button id='joinButton'>Join</button>;
    const backButton = <button id='backButton'>Back</button>;

    const contents = [
      email,
      password,
      confirmPassword,
      backButton,
      joinButton,
    ];
    return <div className='Join'>{contents}</div>;
  };
}
