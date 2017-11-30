import React, { Component } from 'react';

// Nested Components
import Bank from './scenes/Bank/container.js';

export default class _Main extends Component {
  componentWillMount () {
    this.props.getBanks(this.props.token);
  }

  render () {

    const bank = this.props.banks ? <Bank /> : null;
    return <div className='Main'>{bank}</div>;
  }
}