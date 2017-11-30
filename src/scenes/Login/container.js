import { connect } from 'react-redux';
import _Login from './Login';

import {
  loginUser
} from '../../services/actions.js';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (email, password) => { dispatch(loginUser(email, password)); },
  };
};

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Login);

export default Login;
