import React, { Component } from 'react';

// Nested Components
import ViewBank from './components/ViewBank/ViewBank';
import InputBank from './components/InputBank/InputBank';

// Styles
import './Bank.css';

export default class _Bank extends Component {
  // Underscore prefix b/c it's passed to redux container
  
  render () {

    // Properties of ViewBank component
    const viewProps = {
      cards: this.props.cards,
    };

    // Propertied of InputBank component
    const inputProps = {
      addCard: this.props.addCard,
    };

    const view = <ViewBank {...viewProps} />;
    const input = <InputBank {...inputProps} />;

    return <div className='Bank'>{view}{input}</div>;
  }
}
