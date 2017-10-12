import React, { Component } from 'react';
import SubmitInputBank from './components/SubmitInputBank/SubmitInputBank';
import FieldInputBank from './components/FieldInputBank/FieldInputBank';
import './InputBank.css';

export default class InputBank extends Component {
  render = () => {
    const field = <FieldInputBank/>;
    const submit = <SubmitInputBank/>;
    const content = [
      field,
      submit,
    ];
    return <div className='InputBank'>{content}</div>;
  }
}
