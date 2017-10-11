import React, { Component } from 'react';
import Title from '../../components/Title/Title';
import FormField from '../../components/FormField/FormField';
import FormButton from '../../components/FormButton/FormButton';
import './Join.css';

export default class Join extends Component {
  render = () => {

    const fields = [
      <FormField placeholder={"Email"} />,
      <FormField placeholder={"Username"} />,
      <FormField placeholder={"Password"} />,
      <FormField placeholder={"Confirm Password"} />,
    ];

    const buttons = [
      <FormButton id='join_button_1' color='#7cc6fe' value='Back' />,
      <FormButton id='join_button_2' color='#ffccff' value='Join' type='submit' />,
    ];

    const title = <Title/>;
    const form = <form>{fields}{buttons}</form>;

    const content = [
      title,
      form,
    ];

    return <div className='Join'>{content}</div>;
  };
}
