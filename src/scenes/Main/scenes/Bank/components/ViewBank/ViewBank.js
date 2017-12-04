import React, { Component } from 'react';
import request from 'superagent';

// Nested Components
import StackGrid from 'react-stack-grid';
import Card from './components/Card/Card';

export default class ViewBank extends Component {
  componentWillMount () {
    this.props.getCards(this.props.active);
  }

  updateLayout = () => {
    this.grid.updateLayout();
  }

  validSrc = (card) => {
    return request.head(card.src)
      .end((err, res) => {
        if (err) {
          this.props.deleteCard(card.id, this.props.active, this.props.token);
          return false;
        }
        return true;
      });
  }

  stuffCard = (props) => {
    const cardProps = {
      ...props,
      key: props.id,
      active: this.props.active,
      token: this.props.token,
      deleteCard: this.props.deleteCard,
    };
    return <Card {...cardProps} />;
  }

  render () {

    const cards = [];

    for (const card in this.props.cards) {
      if (this.validSrc(this.props.cards[card])) {
        cards.unshift(this.stuffCard(this.props.cards[card]));
      }
    }

    const gridProps = {

      // Set a reference for the grid instance
      gridRef: grid => this.grid = grid,

      // Resize image height on load
      monitorImagesLoaded: true,

      // Layout
      columnWidth: '25%',
      gutterWidth: 10,
      gutterHeight: 10,

      // Animation
      duration: 500,

      // Layout updating :: this is a hack and needs to be changed to something else
      onMouseEnter: this.updateLayout,
      onMouseLeave: this.updateLayout,
    };

    const grid = <StackGrid {...gridProps} >{cards}</StackGrid>;

    return <div className='ViewBank'>{grid}</div>;
  }
}
