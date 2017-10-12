import React, { Component } from 'react';

export default class FieldInputBank extends Component {
  render = () => {
    return <input className='FieldInputBank' {...this.props} />;
  }
}

FieldInputBank.defaultProps = {
  type: 'text',
};
