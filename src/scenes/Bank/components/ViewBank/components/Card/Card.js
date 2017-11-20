import React, { Component } from 'react';

// Nested Components
import DeleteButton from './components/DeleteButton/DeleteButton';

// Styles
import './Card.css';

export default class Card extends Component {

  // Open the image in a new tab
  openSrc = () => {
    window.open(this.props.src);
  }

  deleteCard = () => {
    this.props.deleteCard(this.props.id);
  }


  // // Text Cards
  // textCard = (props) => {
  //   const textCardProps = {
  //     ...props,
  //   };
  //   return <span className='Card' {...textCardProps}>Hello</span>;
  // }

  // // Video Cards
  // videoCard = (props) => {
  //   const videoCardProps = {
  //     ...props,
  //     frameBorder: '0',
  //     scrolling: 'no',
  //     height: '250px',
  //     allowFullScreen: true,
  //   };
  //   return <iframe className='Card' title='title' {...videoCardProps}></iframe>;
  // }

  // Image Cards
  imageCard = () => {
    const imageProps = {
      onClick: this.openSrc,
      src: this.props.src,
    };
    return <img alt='' {...imageProps} />;
  }

  render () {

    // Properties of img component
    const cardProps = {
      ...this.props,
    };

    const buttonProps = {
      onClick: this.deleteCard,
    };

    const image = this.imageCard(this.props);
    const button = <DeleteButton {...buttonProps} />;

    return <div className='Card' {...cardProps}>{button}{image}</div>;
  }
}
