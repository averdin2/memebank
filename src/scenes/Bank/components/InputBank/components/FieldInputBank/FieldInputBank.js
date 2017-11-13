import React, { Component } from 'react';
import './FieldInputBank.css';

export default class FieldInputBank extends Component {
  render () {
    const field = <input {...this.props} />;
    return <div className='FieldInputBank'>{field}</div>;
  }
}
