import { connect } from 'react-redux';
import _BankList from './BankList';

const mapStateToProps = (state) => {
  return {
    token: state.token,
    banks: state.Bank.banks
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const BankList = connect(
  mapStateToProps,
  mapDispatchToProps
)(_BankList);

export default BankList;
