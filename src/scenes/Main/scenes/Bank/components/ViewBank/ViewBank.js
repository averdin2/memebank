import React, { Component } from 'react';
import Card from './components/Card/Card';

export default class ViewBank extends Component {
  render = () => {
    const card = <Card/>;
    return <div className='ViewBank'>{card}</div>;
  }
}
