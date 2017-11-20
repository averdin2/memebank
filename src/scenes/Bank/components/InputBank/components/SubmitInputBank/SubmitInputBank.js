import React, { Component } from 'react';
import MdSend from 'react-icons/lib/md/send';
import './SubmitInputBank.css';

export default class SubmitInputBank extends Component {
  render () {
    const icon = <MdSend/>;
    return <div className='SubmitInputBank' {...this.props} >{icon}</div>;
  }
}
