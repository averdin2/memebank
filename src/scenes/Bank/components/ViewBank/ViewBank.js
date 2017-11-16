import React, { Component } from 'react';

// Nested Components
import StackGrid from 'react-stack-grid';
import Card from './components/Card/Card';

export default class ViewBank extends Component {

  // Create a Card component with input as src
  stuffCard = (src, key) => {
    return <Card key={key} src={src} />;
  }

  // Update layout
  updateLayout = () => {
    this.grid.updateLayout();
  }

  render () {

    // Holds Card components to be rendered
    const cards = [];

    // Stuff stored links
    for (const i in this.props.cards) {
      cards.unshift(this.stuffCard(this.props.cards[i].src, i + cards.length));
    }

    // Video Card test_cards
    cards.unshift(<iframe key={cards.length} src='https://gfycat.com/ifr/HotScornfulGraywolf?referrer=https%3A%2F%2Fwww.redditmedia.com%2Fmediaembed%2F7cjtsa' title='backflip' frameBorder='0' scrolling='no' width='100%' height='250' allowFullScreen></iframe>);


    // Properties of grid component
    const gridProps = {

      // Set a reference for the grid instance :: this.grid
      gridRef: grid => this.grid = grid,

      // Resize image height on load
      monitorImagesLoaded: true,

      // Layout
      columnWidth: '33%',
      gutterWidth: 10,
      gutterHeight: 5,

      // Animation
      duration: 1000,

      // Layout updating :: this is a hack and needs to be changed to something else
      onMouseMove: this.updateLayout,
    };

    const grid = <StackGrid {...gridProps} >{cards}</StackGrid>;

    return <div className='ViewBank'>{grid}</div>;
  }
}
