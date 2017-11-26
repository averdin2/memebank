import React, { Component } from 'react';

// Nested Components
import Trash from 'react-icons/lib/fa/trash';

// Style
import './DeleteButton.css';

export default class DeleteButton extends Component {
  render () {
    return <Trash className='DeleteButton' {...this.props}/>;
  }
}
