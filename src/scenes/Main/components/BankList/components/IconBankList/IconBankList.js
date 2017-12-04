import React, { Component } from 'react';

// Nested Components
import FaCaretRight from 'react-icons/lib/fa/caret-right';

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
    const active = this.props.active === this.props.id ? <FaCaretRight className='ActiveBankIcon'/> : null;
    return <div className='IconBankList' {...iconProps}>{active}</div>;
  }
}
