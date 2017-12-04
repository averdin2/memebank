import React, { Component } from 'react';

// Nested components
import IconBankList from './components/IconBankList/IconBankList';

// Style
import './BankList.css';

export default class BankList extends Component {

  render () {
    return <div className='BankList'><IconBankList/><IconBankList/><IconBankList/></div>;
  }
}
