import React, { Component } from 'react';

// Nested Components
import { PlusButton } from 'react-svg-buttons';

export default class AddBankButton extends Component {

  render () {
    return <PlusButton className='AddBankButton' size={70} color='#4679BD' {...this.props}/>;
  }
}
