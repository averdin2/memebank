import React, { Component } from 'react';

// Nested Components
import BankList from './components/BankList/BankList';
import Bank from './scenes/Bank/container.js';

// Style
import './Main.css';

export default class _Main extends Component {
  componentWillMount () {
    this.props.getBanks(this.props.token);
  }

  render () {
    const list = <BankList/>;
    const bank = this.props.banks ? <Bank /> : null;
    return <div className='Main'>{list}{bank}</div>;
  }
}
