import { connect } from 'react-redux';
import _Main from './Main';

import {
  getBanks,
  addBank,
  updateActiveBank
} from './services/actions.js';

const mapStateToProps = (state) => {
  return {
    token: state.token,
    banks: state.Bank.banks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBanks: (token) => { dispatch(getBanks(token)); },
    addBank: (token) => { dispatch(addBank(token)); },
    updateActiveBank: (id) => { dispatch(updateActiveBank(id)); },
  };
};

const Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Main);

export default Main;
