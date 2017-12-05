import React, { Component } from 'react';

// Nested Components
import Title from '../../components/Title/Title';
import FormField from '../../components/FormField/FormField';
import FormButton from '../../components/FormButton/FormButton';

// Style
import './Join.css';

export default class _Join extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      passwordConfirmation: ''
    };
  }

  backButton () {
    window.location.href = '/';
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }

  handlePasswordConfirmationChange = (e) => {
    this.setState({ passwordConfirmation: e.target.value });
  }

  handleSubmit = () => {
    let errors = [];
    const validate = () => {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
        errors.push('Invalid email address');
      }
      return errors;
    };
    validate();
    if (this.state.password === this.state.passwordConfirmation) {
      if(errors.length === 0){
        this.props.createUser(this.state.email, this.state.username, this.state.password);
        this.setState({ email: '', username: '', password: '', passwordConfirmation: '' });
      }
      else{
        console.log(errors);
        console.log("Can't make user");
      }
    }
    errors = [];
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

    const usernameFieldProps = {
      onChange: this.handleUsernameChange,
      onKeyPress: this.handleKeySubmit,
      value: this.state.username,
      placeholder: 'Username',
    };

    const passwordFieldProps = {
      onChange: this.handlePasswordChange,
      onKeyPress: this.handleKeySubmit,
      value: this.state.password,
      placeholder: 'Password',
      type: 'password',
    };

    const passwordConfirmationFieldProps = {
      onChange: this.handlePasswordConfirmationChange,
      onKeyPress: this.handleKeySubmit,
      value: this.state.passwordConfirmation,
      placeholder: 'Confirm Password',
      type: 'password',
    };

    const fields = [
      <FormField key='1' {...emailFieldProps} />,
      <FormField key='2' {...usernameFieldProps} />,
      <FormField key='3' {...passwordFieldProps} />,
      <FormField key='4' {...passwordConfirmationFieldProps} />,
    ];

    const backButtonProps = {
      id: 'join_button_1',
      color: '#7cc6fe',
      value: 'Back',
      onClick: this.backButton,
    };

    const joinButtonProps = {
      id: 'join_button_2',
      color: '#ffccff',
      value: 'Join',
      onClick: this.handleSubmit,
    };

    const buttons = [
      <FormButton key='1' {...backButtonProps} />,
      <FormButton key='2' {...joinButtonProps} />,
    ];

    const title = <Title/>;

    return <div className='Join'>{title}{fields}{buttons}</div>;
  }
}
