import React, { Component } from 'react';
import MdSend from 'react-icons/lib/md/send';
import './SubmitInputBank.css';

export default class SubmitInputBank extends Component {
  render () {
    const icon = <MdSend {...this.props} />;
    const button = <input type='button' />;
    return <div className='SubmitInputBank'>{icon}</div>;
  }
}
