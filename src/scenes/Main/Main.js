import React, { Component } from 'react';
import Bank from './scenes/Bank/Bank';

export default class Main extends Component {
  render = () => {
    const bank = <Bank/>;
    return <div className='Main'>{bank}</div>;
  }
}
