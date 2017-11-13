import React, { Component } from 'react';

// Nested Components
import Title from '../../components/Title/Title';
import FormField from '../../components/FormField/FormField';
import FormButton from '../../components/FormButton/FormButton';

// Styles
import './Login.css';

export default class Login extends Component {

  // Navigate to Join page
  joinButton () {
    window.location.href = '/join';
  }

  render () {

    // Required fields for logins
    const fields = [
      <FormField key='1' placeholder={'Email'} />,
      <FormField key='2' placeholder={'Password'} type='password' />,
    ];

    // Form submission and navigation buttons
    const buttons = [
      <FormButton key='1' id='login_button_1' color='#7cc6fe' value='Join' onClick={this.joinButton} />,
      <FormButton key='2' id='login_button_2' color='#ffccff' value='Login' type='submit' />,
    ];

    const title = <Title/>;
    const form = <form>{fields}{buttons}</form>;

    return <div className='Login'>{title}{form}</div>;
  }
}
