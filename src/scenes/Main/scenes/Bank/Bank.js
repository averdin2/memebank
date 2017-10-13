import React, { Component } from 'react';
import ViewBank from './components/ViewBank/ViewBank';
import InputBank from './components/InputBank/InputBank';
import './Bank.css';

export default class Bank extends Component {
  constructor() {
    super();
    this.state = { card_list: [] };
  }

  add_card = (src) => {
    console.log('hi');
    const new_card_list = this.state.card_list.slice();
    new_card_list.push(src);
    this.setState({ card_list: new_card_list });
  }
  render = () => {
    const view = <ViewBank card_list={this.state.card_list}/>;
    const input = <InputBank add_card={this.add_card}/>;
    const content = [
      view,
      input,
    ];
    return <div className='Bank'>{content}</div>;
  }
}
