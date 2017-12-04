import React, { Component } from 'react';

// Nested components
import IconBankList from './components/IconBankList/IconBankList';

// Style
import './BankList.css';

export default class BankList extends Component {
  componentWillMount () {
    this.props.updateActiveBank(this.props.banks[0].id);
  }

  stuffBank = (props) => {
    const bankProps = {
      ...props,
      key: props.id,
      updateActiveBank: this.props.updateActiveBank,
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
