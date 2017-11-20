import React, { Component } from 'react';

// Nested Components
import DeleteButton from './components/DeleteButton/DeleteButton';

// Styles
import './Card.css';

export default class Card extends Component {
  constructor (props) {
    super(props);
    this.state = { hover: false };
  }

  // Open the image in a new tab
  openSrc = () => {
    window.open(this.props.src);
  }

  // Delete card from bank
  deleteCard = () => {
    this.props.deleteCard(this.props.id);
  }

  // Show button on hover
  showButtons = () => {
    this.setState({ hover: true });
  }

  hideButtons = () => {
    this.setState({ hover: false });
  }

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
      onMouseEnter: this.showButtons,
      onMouseLeave: this.hideButtons,
    };

    const buttonProps = {
      onClick: this.deleteCard,
    };

    const image = this.imageCard(this.props);
    const button = this.state.hover ? <DeleteButton {...buttonProps} /> : null;

    return <div className='Card' {...cardProps}>{button}{image}</div>;
  }
}
