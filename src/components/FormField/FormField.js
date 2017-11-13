import React, { Component } from 'react';
import './FormField.css';

export default class FormField extends Component {
  render () {

    // Text field element
    return <input className='FormField' {...this.props} />;
  }
}

FormField.defaultProps = {
  type: 'text',
};
