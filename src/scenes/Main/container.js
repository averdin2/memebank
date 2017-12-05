import { connect } from 'react-redux';
import _Main from './Main';

import {
  getBanks,
  addBank,
  deleteBank,
  updateActiveBank
} from './services/actions.js';

const mapStateToProps = (state) => {
  return {
    token: state.token,
    banks: state.Bank.banks,
    active: state.Bank.active,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBanks: (token) => { dispatch(getBanks(token)); },
    addBank: (token) => { dispatch(addBank(token)); },
    deleteBank: (id, token) => { dispatch(deleteBank(id, token)); },
    updateActiveBank: (id) => { dispatch(updateActiveBank(id)); },
  };
};

const Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Main);

export default Main;
