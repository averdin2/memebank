import React, { Component } from 'react';

// Nested Components
import DeleteButton from './components/DeleteButton/DeleteButton';

// Style
import './Card.css';

export default class Card extends Component {
  constructor (props) {
    super(props);
    this.state = { hover: false };
  }

  openSrc = () => {
    window.open(this.props.src);
  }

  deleteCard = () => {
    this.props.deleteCard(this.props.id, this.props.active, this.props.token);
  }

  showButtons = () => {
    this.setState({ hover: true });
  }

  hideButtons = () => {
    this.setState({ hover: false });
  }

  imageCard = () => {
    const imageProps = {
      onClick: this.openSrc,
      src: this.props.src,
    };
    return <img alt='' {...imageProps} />;
  }

  render () {

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
