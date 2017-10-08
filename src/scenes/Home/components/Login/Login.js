import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
  render = () => {
    const userName = <input id="username" type="text" placeholder={"username"} name="name" />;
    const password = <input id="password" type="text" placeholder={"password"} name="password" />;
    const label = <label>{userName}{password}</label>;
    const loginButton = <input id="loginButton" type="submit" value="Login" />
    const joinButton = <button id="joinButton">Join</button>;
    const loginForm = <form>{label}{joinButton}{loginButton}</form>;
    
    return <div className='Login'>{loginForm}</div>;
  }
}
