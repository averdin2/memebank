import React, { Component } from 'react';
import Title from '../../components/Title/Title';
import FormField from '../../components/FormField/FormField';
import FormButton from '../../components/FormButton/FormButton';
import './Login.css';

export default class Login extends Component {
  render = () => {

    const fields = [
      <FormField placeholder={'Email'} />,
      <FormField placeholder={'Password'} type='password' />,
    ];

    const buttons = [
      <FormButton id='login_button_1' color='#7cc6fe' value='Join' />,
      <FormButton id='login_button_2' color='#ffccff' value='Login' type='submit' />,
    ];

    const title = <Title/>;
    const form = <form>{fields}{buttons}</form>;

    const content = [
      title,
      form,
    ];

    return <div className='Login'>{content}</div>;
  }
}
