import React, { Component } from 'react';

// Nested Components
import StackGrid from 'react-stack-grid';
import Card from './components/Card/Card';

export default class ViewBank extends Component {

  // Update layout
  updateLayout = () => {
    this.grid.updateLayout();
  }

  // Delete card from bank
  deleteCard = (id) => {
    this.props.deleteCard(id);
  }

  // Create a Card component with input as src
  stuffCard = (props) => {
    const cardProps = {
      ...props,
      key: props.id,
      deleteCard: this.deleteCard,
    };
    return <Card {...cardProps} />;
  }

  render () {

    // Holds Card components to be rendered
    const cards = [];

    // Stuff stored links
    for (const i in this.props.cards) {
      cards.unshift(this.stuffCard(this.props.cards[i]));
    }

    // Properties of grid component
    const gridProps = {

      // Set a reference for the grid instance :: this.grid
      gridRef: grid => this.grid = grid,

      // Resize image height on load
      monitorImagesLoaded: true,

      // Layout
      columnWidth: '33%',
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
