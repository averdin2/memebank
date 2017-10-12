import React, { Component } from 'react';

export default class FieldInputBank extends Component {
  render = () => {

    const input = <input {...this.props} />;

    return <div className='FieldInputBank'>{input}</div>;
  }
}

FieldInputBank.defaultProps = {
  type: 'text',
};
