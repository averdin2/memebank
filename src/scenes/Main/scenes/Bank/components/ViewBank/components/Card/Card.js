import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
  open_src = () => {
    window.open(this.props.src);
  }
  render = () => {
    return <img className='Card' onClick={this.open_src} {...this.props} />;
  }
}
