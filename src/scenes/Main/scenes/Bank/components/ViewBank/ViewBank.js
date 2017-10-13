import React, { Component } from 'react';
import Card from './components/Card/Card';
import StackGrid from 'react-stack-grid';

export default class ViewBank extends Component {
  render = () => {
    const card_list = [];
    for (const src in this.props.card_list) {
      card_list.push(<Card src={this.props.card_list[src]}/>);
    }
    const grid = <StackGrid>{card_list}</StackGrid>;
    return <div className='ViewBank'>{grid}</div>;
  }
}
