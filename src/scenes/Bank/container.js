import { connect } from 'react-redux';
import _Bank from './Bank';
import { validateAddCard } from './services/actions.js';

const mapStateToProps = (state) => {
  return { cards: state.Bank.cards };
};

const mapDispatchToProps = (dispatch, src) => {
  return {
    addCard: (src) => { dispatch(validateAddCard(src)); }
  };
};

const Bank = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Bank);

export default Bank;
