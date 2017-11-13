import React, { Component } from 'react';

// Styles
import './Card.css';

export default class Card extends Component {

  // Open the image in a new tab
  openSrc = () => {
    window.open(this.props.src);
  }

  render () {

    // Properties of img component
    const cardProps = {
      onClick: this.openSrc,
    };

    return <img className='Card' alt='' {...this.props} {...cardProps} />;
  }
}
