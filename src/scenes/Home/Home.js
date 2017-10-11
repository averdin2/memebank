import React, { Component } from 'react';
import Login from './scenes/Login/Login';
import Join from './scenes/Join/Join';
import './Home.css';

export default class Home extends Component {
  constructor() {
    super();
    this.state = { login_active: true };
  }

  toggle_page = () => {
    this.setState( this.state.login_active ?
      { login_active: false } :
      { login_active: true }
    );
  }

  render = () => {
    const login = <Login toggle_page={this.toggle_page} />;
    const join = <Join toggle_page={this.toggle_page} />;
    const scene = this.state.login_active ? login : join;
    return <div className='Home'>{scene}</div>;
  }
}
