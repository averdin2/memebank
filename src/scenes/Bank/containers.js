import { connect } from 'react-redux';
import Bank from './Bank';

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

const VisibleBank = connect(
  mapStateToProps,
  mapDispatchToProps
)(Bank);

export default VisibleBank;
