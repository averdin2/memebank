import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
  
  open_src = () => {
    window.open(this.props.src);
  }

  render = () => {

    const image_props = {
      onClick: this.open_src,
    };

    return <img className='Card'{...image_props} {...this.props} />;
  }
}
