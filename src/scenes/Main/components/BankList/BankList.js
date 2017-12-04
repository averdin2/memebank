import React, { Component } from 'react';

// Nested components
import IconBankList from './components/IconBankList/IconBankList';
import AddBankButton from './components/AddBankButton/AddBankButton';

// Style
import './BankList.css';

export default class BankList extends Component {
  componentWillMount () {
    this.props.updateActiveBank(this.props.banks[0].id);
  }

  addBank = () => {
    this.props.addBank(this.props.token);
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

    const plus = <AddBankButton onClick={this.addBank}/>;

    return <div className='BankList'>{banks}{plus}</div>;
  }
}
