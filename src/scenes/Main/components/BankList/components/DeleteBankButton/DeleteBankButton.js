import React, { Component } from 'react';

// Nested Components
import Trash from 'react-icons/lib/fa/trash';

// Style
import './DeleteBankButton.css';

export default class DeleteBankButton extends Component {
  render () {
    return <Trash className='DeleteBankButton' {...this.props}/>;
  }
}
