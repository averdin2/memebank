import React, { Component } from 'react';

// Nested Components
import Title from '../../components/Title/Title';
import FormField from '../../components/FormField/FormField';
import FormButton from '../../components/FormButton/FormButton';

// Style
import './Join.css';

export default class Join extends Component {

  backButton () {
    window.location.href = '/';
  }

  render () {

    const fields = [
      <FormField key='1' placeholder={'Email'} />,
      <FormField key='2' placeholder={'Username'} />,
      <FormField key='3' placeholder={'Password'} type='password' />,
      <FormField key='4' placeholder={'Confirm Password'} type='password' />,
    ];

    const buttons = [
      <FormButton key='1' id='join_button_1' color='#7cc6fe' value='Back' onClick={this.backButton} />,
      <FormButton key='2' id='join_button_2' color='#ffccff' value='Join' type='submit' />,
    ];

    const title = <Title/>;
    const form = <form>{fields}{buttons}</form>;

    return <div className='Join'>{title}{form}</div>;
  }
}
