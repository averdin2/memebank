import React, { Component } from 'react';
import StackGrid from 'react-stack-grid';

export default class ViewBank extends Component {
  render = () => {
    const grid_props = {
      monitorImagesLoaded: true,
      columnWidth: '20%',
      gutterWidth: '1em',
      gutterHeight: '1em',
    }
    const card_list = this.props.card_list;
    const grid = <StackGrid {...this.grid_props}>{card_list}</StackGrid>;
    return <div className='ViewBank'>{grid}</div>;
  }
}
