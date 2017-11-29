import { connect } from 'react-redux';
import _Memebank from './Memebank.js';


const mapStateToProps = (state) => {
  return {
    token: state.User.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const Memebank = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Memebank);

export default Memebank;
