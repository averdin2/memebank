import React, { Component } from 'react';

// Nested Components
import Trash from 'react-icons/lib/fa/trash';

// Style
import './DeleteCardButton.css';

export default class DeleteCardButton extends Component {
  render () {
    return <Trash className='DeleteCardButton' {...this.props}/>;
  }
}
