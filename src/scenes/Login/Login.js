import React, { Component } from 'react';

// Nested Components
import Title from '../../components/Title/Title';
import FormField from '../../components/FormField/FormField';
import FormButton from '../../components/FormButton/FormButton';

// Style
import './Login.css';

export default class _Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  joinButton () {
    window.location.href = '/join';
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }

  handleSubmit = () => {
    this.props.loginUser(this.state.email, this.state.password);
    this.setState({ email: '', password: '' });
  }

  handleKeySubmit = (event) => {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  }

  render () {

    const emailFieldProps = {
      onChange: this.handleEmailChange,
      onKeyPress: this.handleKeySubmit,
      value: this.state.email,
      placeholder: 'Email',
    };

    const passwordFieldProps = {
      onChange: this.handlePasswordChange,
      onKeyPress: this.handleKeySubmit,
      value: this.state.password,
      placeholder: 'Password',
      type: 'password',
    };

    const fields = [
      <FormField key='1' {...emailFieldProps} />,
      <FormField key='2' {...passwordFieldProps} />,
    ];

    const joinButtonProps = {
      id: 'login_button_1',
      color: '#7cc6fe',
      value: 'Join',
      onClick: this.joinButton,
    };

    const loginButtonProps = {
      id: 'login_button_2',
      color: '#ffccff',
      value: 'Login',
      onClick: this.handleSubmit,
    };

    const buttons = [
      <FormButton key='1' {...joinButtonProps} />,
      <FormButton key='2' {...loginButtonProps} />,
    ];

    const title = <Title/>;
    const form = <form>{fields}{buttons}</form>;

    return <div className='Login'>{title}{form}</div>;
  }
}
