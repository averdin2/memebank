import { connect } from 'react-redux';
import _Join from './Join';

import {
  createUser
} from '../../services/actions.js';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (email, username, password) => { dispatch(createUser(email, username, password)); },
  };
};

const Join = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Join);

export default Join;
