import React, { Component } from 'react';
import Close from 'react-icons/lib/fa/close';

export default class DeleteButton extends Component {
  render () {
    return <Close className='DeleteButton' {...this.props}/>;
  }
}
