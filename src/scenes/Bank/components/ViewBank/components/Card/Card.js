import React, { Component } from 'react';

// Styles
import './Card.css';

export default class Card extends Component {

  // Open the image in a new tab
  openSrc = () => {
    window.open(this.props.src);
  }

  // Image Cards
  imageCard = (props) => {
    const imageCardProps = {
      ...props,
      width: '100%',
    };
    return <img className='Card' alt='' {...imageCardProps} />;
  }

  // Video Cards
  videoCard = (props) => {
    const videoCardProps = {
      ...props,
      frameBorder: '0',
      scrolling: 'no',
      width: '100%',
      height: '100%',
      allowFullScreen: true,
    };
    return <iframe className='Card' {...videoCardProps}></iframe>;
  }

  render () {

    // Properties of img component
    const cardProps = {
      ...this.props,
      onClick: this.openSrc,
    };

    return this.imageCard(cardProps);
  }
}
