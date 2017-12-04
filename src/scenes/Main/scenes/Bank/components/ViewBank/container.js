import { connect } from 'react-redux';
import _ViewBank from './ViewBank';


const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    token: state.token,
    active: state.Bank.active,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const ViewBank = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ViewBank);

export default ViewBank;
