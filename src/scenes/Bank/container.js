import { connect } from 'react-redux';
import {
  addCard,
  deleteCard
} from './services/actions.js';
import _Bank from './Bank';


const mapStateToProps = (state) => {
  return { cards: state.Bank.cards };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (src) => { dispatch(addCard(src)); },
    deleteCard: (id) => { dispatch(deleteCard(id)); }
  };
};

const Bank = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Bank);

export default Bank;
