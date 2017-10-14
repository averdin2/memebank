import React, { Component } from 'react';
import Card from './components/Card/Card';
import StackGrid from 'react-stack-grid';

export default class ViewBank extends Component {
  render = () => {
    const card_list = this.props.card_list;
    const grid = <StackGrid>{card_list}</StackGrid>;
    return <div className='ViewBank'>{grid}</div>;
  }
}
