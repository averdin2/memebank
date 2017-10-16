import React, { Component } from 'react';
import StackGrid from 'react-stack-grid';

export default class ViewBank extends Component {
  render = () => {

    const grid_props = {
      columnWidth: '20%',
    }

    const card_list = this.props.card_list;
    const grid = <StackGrid {...grid_props}>{card_list}</StackGrid>;

    const content = [
      grid,
    ];
    
    return <div className='ViewBank'>{grid}</div>;
  }
}
