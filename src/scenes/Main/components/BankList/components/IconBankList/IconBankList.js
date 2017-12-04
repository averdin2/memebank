import React, { Component } from 'react';

// Style
import './IconBankList.css';

export default class IconBankList extends Component {

  updateActiveBank = () => {
    this.props.updateActiveBank(this.props.id);
  }

  render () {
    const iconProps = {
      onClick: this.updateActiveBank,
    };
    return <div className='IconBankList' {...iconProps}> </div>;
  }
}
