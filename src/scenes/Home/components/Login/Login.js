import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
  render = () => {
  	const loginButton = <button>Login</button>;
  	//const userName = <i
  	const content = [
  		loginButton,
  	];
  	return <div className='Login'>{content}</div>;
  } 
}