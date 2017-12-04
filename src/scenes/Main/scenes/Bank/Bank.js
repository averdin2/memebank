import React, { Component } from 'react';

// Nested Components
import ViewBank from './components/ViewBank/ViewBank';
import InputBank from './components/InputBank/InputBank';

// Styles
import './Bank.css';

export default class _Bank extends Component {
  render () {

    const style = (
      <style>{`
        body {
          background-color: #CCCCFF;
        }
      `}</style>
    );

    const viewProps = {
      active: this.props.active,
      token: this.props.token,
      cards: this.props.cards,
      deleteCard: this.props.deleteCard,
      getCards: this.props.getCards,
    };

    const inputProps = {
      active: this.props.active,
      token: this.props.token,
      addCard: this.props.addCard,
    };

    const view = <ViewBank {...viewProps} />;
    const input = <InputBank {...inputProps} />;

    return <div className='Bank'>{style}{view}{input}</div>;
  }
}
