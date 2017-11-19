import { connect } from 'react-redux';
import { addCard } from './services/actions.js';
import _Bank from './Bank';


const mapStateToProps = (state) => {
  return { cards: state.Bank.cards };
};

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
