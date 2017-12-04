import { connect } from 'react-redux';
import _Bank from './Bank';

import {
  addCard,
  deleteCard,
  getCards
} from './services/actions.js';


const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    token: state.token,
    banks: state.Bank.banks,
    active: state.Bank.active,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (src, bank, token) => { dispatch(addCard(src, bank, token)); },
    deleteCard: (id, bank, token) => { dispatch(deleteCard(id, bank, token)); },
    getCards: (token) => { dispatch(getCards(token)); },
  };
};

const Bank = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Bank);

export default Bank;
