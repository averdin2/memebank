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

    const listProps = {
      token: this.props.token,
      banks: this.props.banks,
      active: this.props.active,
      addBank: this.props.addBank,
      updateActiveBank: this.props.updateActiveBank,
    };

    const list = this.props.banks ? <BankList {...listProps}/> : null;
    const bank = this.props.banks ? <Bank/> : null;
    return <div className='Main'>{list}{bank}</div>;
  }
}
