import React, { Component } from 'react';

// Nested components
import IconBankList from './components/IconBankList/IconBankList';

// Style
import './BankList.css';

export default class _BankList extends Component {

  stuffBank = (props) => {
    const bankProps = {
      ...props,
      key: props.id,
    };
    return <IconBankList {...bankProps}/>;
  }

  render () {
    const banks = [];
    for (const bank in this.props.banks) {
      banks.push(this.stuffBank(this.props.banks[bank]));
    }

    return <div className='BankList'>{banks}</div>;
  }
}
