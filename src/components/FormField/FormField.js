import React, { Component } from 'react';
import './FormField.css';

export default class FormField extends Component {
  render () {
    return <input className='FormField' {...this.props} />;
  }
}

FormField.defaultProps = {
  type: 'text',
  spellCheck: 'false',
};
