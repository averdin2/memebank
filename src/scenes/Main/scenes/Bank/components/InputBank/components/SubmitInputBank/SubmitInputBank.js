import React, { Component } from 'react';

export default class SubmitInputBank extends Component {
  render = () => {
    const button = <input type='submit' value='>>' />;
    return <div className='SubmitInputBank'>{button}</div>;
  }
}
