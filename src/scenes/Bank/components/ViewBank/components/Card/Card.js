import React, { Component } from 'react';

// Styles
import './Card.css';

export default class Card extends Component {

  // Open the image in a new tab
  openSrc = () => {
    window.open(this.props.src);
  }

  // Text Cards
  textCard = (props) => {
    const textCardProps = {
      ...props,
    };
    return <span className='Card' {...textCardProps}>Hello</span>;
  }

  // Image Cards
  imageCard = (props) => {
    const imageCardProps = {
      ...props,
    };
    return <img className='Card' alt='' {...imageCardProps} />;
  }

  // Video Cards
  videoCard = (props) => {
    const videoCardProps = {
      ...props,
      frameBorder: '0',
      scrolling: 'no',
      height: '250px',
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
