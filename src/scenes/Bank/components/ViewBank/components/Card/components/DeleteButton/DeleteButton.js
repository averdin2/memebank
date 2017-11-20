import React, { Component } from 'react';

// Nested Components
import Close from 'react-icons/lib/fa/close';

// Styles
import './DeleteButton.css';

export default class DeleteButton extends Component {
  render () {
    return <Close className='DeleteButton' {...this.props}/>;
  }
}
