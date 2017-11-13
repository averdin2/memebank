import { connect } from 'react-redux';
import _Bank from './Bank';

// Actions
import { addCard } from './actions';

// Get all cards from state
const mapStateToProps = (state) => {
  return { cards: state.Bank.cards };
};

// Add a src to cards
const mapDispatchToProps = (dispatch, src) => {
  return {
    addCard: (src) => { dispatch(addCard(src)); }
  };
};

const Bank = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Bank);

export default Bank;
