import React, { Component } from 'react';

// Style
import './AddBankButton.css';

export default class AddBankButton extends Component {

  render () {
    const text = <h4>add</h4>;
    return <div className='AddBankButton' {...this.props}></div>;
  }
}
