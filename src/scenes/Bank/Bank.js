import React, { Component } from 'react';

// Nested Components
import ViewBank from './components/ViewBank/ViewBank';
import InputBank from './components/InputBank/InputBank';

// Styles
import './Bank.css';

export default class _Bank extends Component {
  componentWillMount () {
    this.props.getCardData();
  }

  // Add card to bank
  addCard = (src) => {
    this.props.addCard(src);
    this.props.getCardData();
  }

  // Delete card from bank
  deleteCard = (id) => {
    this.props.deleteCard(id);
    this.props.getCardData();
  }

  render () {

    // Properties of ViewBank component
    const viewProps = {
      cards: this.props.cards,
      deleteCard: this.deleteCard,
    };

    // Propertied of InputBank component
    const inputProps = {
      addCard: this.addCard,
    };

    const style = (
      <style>{`
        body {
          background-color: #CCCCFF;
        }
      `}</style>
    );

    const view = <ViewBank {...viewProps} />;
    const input = <InputBank {...inputProps} />;

    return <div className='Bank'>{style}{view}{input}</div>;
  }
}
